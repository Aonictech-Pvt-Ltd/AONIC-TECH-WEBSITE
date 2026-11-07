import { describe, it, expect } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

describe("SEO Metadata: robots() & sitemap()", () => {
  it("generates compliant robots.txt configuration", () => {
    const robotsConfig = robots();

    expect(robotsConfig).toBeDefined();
    expect(robotsConfig.sitemap).toBe("https://aonictech.com/sitemap.xml");
    expect(robotsConfig.host).toBe("https://aonictech.com");

    const rules = Array.isArray(robotsConfig.rules)
      ? robotsConfig.rules
      : [robotsConfig.rules];

    expect(rules.length).toBeGreaterThan(0);
    const defaultRule = rules[0];
    expect(defaultRule.userAgent).toBe("*");
    expect(defaultRule.allow).toBe("/");
    expect(defaultRule.disallow).toContain("/api/");
  });

  it("generates complete XML sitemap with all 7 public routes", () => {
    const sitemapEntries = sitemap();

    expect(Array.isArray(sitemapEntries)).toBe(true);
    expect(sitemapEntries.length).toBe(7);

    const urls = sitemapEntries.map((e) => e.url);

    expect(urls).toContain("https://aonictech.com/");
    expect(urls).toContain("https://aonictech.com/services");
    expect(urls).toContain("https://aonictech.com/projects");
    expect(urls).toContain("https://aonictech.com/about");
    expect(urls).toContain("https://aonictech.com/contact");
    expect(urls).toContain("https://aonictech.com/blog");
    expect(urls).toContain("https://aonictech.com/privacy-and-terms");

    // Verify priorities and frequencies
    const homeEntry = sitemapEntries.find((e) => e.url === "https://aonictech.com/");
    expect(homeEntry?.priority).toBe(1.0);
    expect(homeEntry?.changeFrequency).toBe("weekly");

    sitemapEntries.forEach((entry) => {
      expect(entry.url).toMatch(/^https:\/\/aonictech\.com/);
      expect(entry.lastModified).toBeInstanceOf(Date);
      expect(entry.priority).toBeGreaterThanOrEqual(0);
      expect(entry.priority).toBeLessThanOrEqual(1.0);
    });
  });
});
