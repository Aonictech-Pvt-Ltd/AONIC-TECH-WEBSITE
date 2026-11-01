import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

/**
 * Global Redis Client Singleton (Upstash Serverless Redis)
 * 
 * Safely initializes if credentials are provided in environment variables.
 * Degrades gracefully if credentials are not yet configured.
 */
const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = (redisUrl && redisToken)
  ? new Redis({
      url: redisUrl,
      token: redisToken,
    })
  : null;

/**
 * Pre-configured Sliding Window Rate Limiters
 */

// Strict Limiter for Contact & Quote Forms (5 requests per 10 minutes per IP)
export const contactRateLimiter = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      analytics: true,
      prefix: "aonic_ratelimit_contact",
    })
  : null;

// General API Limiter (30 requests per minute per IP)
export const apiRateLimiter = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(30, "1 m"),
      analytics: true,
      prefix: "aonic_ratelimit_api",
    })
  : null;

/**
 * Custom Rate Limiter Factory
 * Allows creating custom rate limit rules anywhere in the application.
 * 
 * @example
 * const customLimiter = createRateLimiter(10, "1 m", "custom_action");
 * const { success } = await checkRateLimit(customLimiter, userIp);
 */
export function createRateLimiter(
  requests: number = 10,
  window: "10 s" | "1 m" | "5 m" | "10 m" | "1 h" | "1 d" = "1 m",
  prefix: string = "aonic_custom"
) {
  if (!redis) return null;
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(requests, window),
    analytics: true,
    prefix: `aonic_ratelimit_${prefix}`,
  });
}

/**
 * Check Rate Limit Helper
 * Returns true if allowed, false if limit exceeded.
 */
export async function checkRateLimit(
  limiter: Ratelimit | null,
  identifier: string
): Promise<{ success: boolean; remaining?: number; reset?: number }> {
  if (!limiter) {
    // If Redis is not configured, allow request (graceful fallback)
    return { success: true };
  }
  try {
    const res = await limiter.limit(identifier);
    return {
      success: res.success,
      remaining: res.remaining,
      reset: res.reset,
    };
  } catch (error) {
    console.error("Rate limit check error:", error);
    // Allow request on Redis connection failure to prevent breaking user workflows
    return { success: true };
  }
}

/**
 * -------------------------------------------------------------
 * High-Performance Caching Helpers (Cache-Aside Pattern)
 * -------------------------------------------------------------
 */

/**
 * Retrieve cached JSON data by key.
 */
export async function getCache<T>(key: string): Promise<T | null> {
  if (!redis) return null;
  try {
    return await redis.get<T>(key);
  } catch (err) {
    console.error(`Redis get error for key "${key}":`, err);
    return null;
  }
}

/**
 * Set cached JSON data with optional Time-To-Live (TTL in seconds).
 * Default TTL: 3600 seconds (1 hour).
 */
export async function setCache(
  key: string,
  data: unknown,
  ttlSeconds: number = 3600
): Promise<boolean> {
  if (!redis) return false;
  try {
    if (ttlSeconds > 0) {
      await redis.set(key, data, { ex: ttlSeconds });
    } else {
      await redis.set(key, data);
    }
    return true;
  } catch (err) {
    console.error(`Redis set error for key "${key}":`, err);
    return false;
  }
}

/**
 * Invalidate / delete a cache key.
 */
export async function deleteCache(key: string): Promise<boolean> {
  if (!redis) return false;
  try {
    await redis.del(key);
    return true;
  } catch (err) {
    console.error(`Redis del error for key "${key}":`, err);
    return false;
  }
}

/**
 * Cache-Aside Wrapper:
 * 1. Checks Redis cache first. If found, returns cached value immediately.
 * 2. If not found, executes fetcher function to get fresh data.
 * 3. Stores fresh data in Redis with TTL.
 * 4. Returns data.
 * 
 * @example
 * const services = await fetchWithCache("all_services", async () => {
 *   return await db.services.findMany();
 * }, 1800); // 30 mins
 */
export async function fetchWithCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlSeconds: number = 3600
): Promise<T> {
  const cached = await getCache<T>(key);
  if (cached !== null) {
    return cached;
  }

  const freshData = await fetcher();
  await setCache(key, freshData, ttlSeconds);
  return freshData;
}
