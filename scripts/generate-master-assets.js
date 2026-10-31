const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const rootDir = process.cwd();
  const faviconSource = path.join(rootDir, 'Favicon.png');
  const horizontalSource = path.join(rootDir, 'Final_Logo_Horizontal.png');

  if (!fs.existsSync(faviconSource) || !fs.existsSync(horizontalSource)) {
    console.error('Source images not found in root directory!');
    process.exit(1);
  }

  // Create public/images and public/images/master directories if needed
  const imagesDir = path.join(rootDir, 'public', 'images');
  const masterDir = path.join(imagesDir, 'master');
  const appDir = path.join(rootDir, 'src', 'app');
  const publicDir = path.join(rootDir, 'public');

  if (!fs.existsSync(masterDir)) {
    fs.mkdirSync(masterDir, { recursive: true });
  }

  console.log('1. Archiving master source files into public/images/master/...');
  fs.copyFileSync(faviconSource, path.join(masterDir, 'Favicon.png'));
  fs.copyFileSync(horizontalSource, path.join(masterDir, 'Final_Logo_Horizontal.png'));

  console.log('2. Processing Favicon.png for square icons & favicons...');
  const favTrimmed = await sharp(faviconSource).trim().toBuffer({ resolveWithObject: true });
  console.log(`   Trimmed Favicon: ${favTrimmed.info.width}x${favTrimmed.info.height}`);

  // Create square mark with 8% breathing padding
  const squareSize = 1560;
  const squareMarkBuffer = await sharp(favTrimmed.data)
    .resize(favTrimmed.info.width, favTrimmed.info.height)
    .extend({
      top: Math.floor((squareSize - favTrimmed.info.height) / 2),
      bottom: Math.ceil((squareSize - favTrimmed.info.height) / 2),
      left: Math.floor((squareSize - favTrimmed.info.width) / 2),
      right: Math.ceil((squareSize - favTrimmed.info.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ compressionLevel: 9 })
    .toBuffer();

  // Save company-logo-mark.png (master square emblem)
  fs.writeFileSync(path.join(imagesDir, 'company-logo-mark.png'), squareMarkBuffer);
  console.log('   Saved company-logo-mark.png (1560x1560)');

  // Generate all downscaled sizes using high-quality Lanczos3 filter
  const sizes = [
    { name: 'favicon-16x16.png', size: 16, targetDir: imagesDir },
    { name: 'favicon-32x32.png', size: 32, targetDir: imagesDir },
    { name: 'icon.png', size: 32, targetDir: appDir },
    { name: 'apple-touch-icon.png', size: 180, targetDir: imagesDir },
    { name: 'apple-icon.png', size: 180, targetDir: appDir },
    { name: 'android-chrome-192x192.png', size: 192, targetDir: imagesDir },
    { name: 'android-chrome-512x512.png', size: 512, targetDir: imagesDir },
  ];

  for (const item of sizes) {
    const resized = await sharp(squareMarkBuffer)
      .resize(item.size, item.size, { kernel: sharp.kernel.lanczos3 })
      .png({ compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(path.join(item.targetDir, item.name), resized);
    console.log(`   Saved ${item.name} (${item.size}x${item.size}) in ${path.relative(rootDir, item.targetDir)}`);
  }

  // Create favicon.ico files (standard 32x32 PNG container for modern browsers)
  const icoBuffer = await sharp(squareMarkBuffer)
    .resize(32, 32, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('   Saved favicon.ico in public/ and src/app/');

  console.log('3. Processing Final_Logo_Horizontal.png for official horizontal logo...');
  const logoTrimmed = await sharp(horizontalSource).trim().toBuffer({ resolveWithObject: true });
  console.log(`   Trimmed Horizontal Logo: ${logoTrimmed.info.width}x${logoTrimmed.info.height}`);

  // Add 20px padding
  const paddedLogo = await sharp(logoTrimmed.data)
    .extend({
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ compressionLevel: 9 })
    .toBuffer();

  const paddedInfo = await sharp(paddedLogo).metadata();
  console.log(`   Padded Logo: ${paddedInfo.width}x${paddedInfo.height} (Aspect ratio: ${(paddedInfo.width / paddedInfo.height).toFixed(5)})`);

  // Save company-logo.png (light theme) & logo.png
  fs.writeFileSync(path.join(imagesDir, 'company-logo.png'), paddedLogo);
  fs.writeFileSync(path.join(imagesDir, 'logo.png'), paddedLogo);
  console.log('   Saved company-logo.png and logo.png');

  console.log('4. Generating dark variant (company-logo-white.png) with white text...');
  const { data: rawData, info: rawInfo } = await sharp(paddedLogo).raw().toBuffer({ resolveWithObject: true });
  const w = rawInfo.width;
  const h = rawInfo.height;
  const whiteData = Buffer.from(rawData);

  // In paddedLogo, the emblem ends before x = 1760. Text starts at x >= 1760.
  // Transform dark text pixels to pure white #FFFFFF while maintaining exact alpha channel anti-aliasing
  for (let y = 0; y < h; y++) {
    for (let x = 1760; x < w; x++) {
      const idx = (y * w + x) * 4;
      const alpha = whiteData[idx + 3];
      if (alpha > 0) {
        whiteData[idx] = 255;     // R
        whiteData[idx + 1] = 255; // G
        whiteData[idx + 2] = 255; // B
      }
    }
  }

  const whiteLogoBuffer = await sharp(whiteData, {
    raw: { width: w, height: h, channels: 4 }
  }).png({ compressionLevel: 9 }).toBuffer();

  fs.writeFileSync(path.join(imagesDir, 'company-logo-white.png'), whiteLogoBuffer);
  console.log('   Saved company-logo-white.png');

  console.log('5. Cleaning up obsolete / dummy logo files...');
  const obsoleteFiles = [
    path.join(imagesDir, 'logo.svg'),
    path.join(publicDir, 'logo.svg'),
  ];
  for (const f of obsoleteFiles) {
    if (fs.existsSync(f)) {
      fs.unlinkSync(f);
      console.log(`   Removed obsolete file: ${path.relative(rootDir, f)}`);
    }
  }

  console.log('Master asset generation completed successfully!');
}

main().catch(err => {
  console.error('Fatal error during asset generation:', err);
  process.exit(1);
});
