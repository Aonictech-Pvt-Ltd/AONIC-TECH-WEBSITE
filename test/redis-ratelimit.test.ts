import { describe, it, expect, vi } from "vitest";
import {
  checkRateLimit,
  createRateLimiter,
  getCache,
  setCache,
  deleteCache,
  fetchWithCache,
  redis,
} from "@/lib/redis";
import type { Ratelimit } from "@upstash/ratelimit";

describe("Redis & Rate Limiting: Graceful Fallbacks & Logic", () => {
  it("allows request when limiter is null (graceful degradation)", async () => {
    const result = await checkRateLimit(null, "127.0.0.1");
    expect(result.success).toBe(true);
  });

  it("returns success=true when limiter permits request", async () => {
    const mockLimiter = {
      limit: vi.fn().mockResolvedValue({
        success: true,
        remaining: 4,
        reset: Date.now() + 60000,
      }),
    } as unknown as Ratelimit;

    const result = await checkRateLimit(mockLimiter, "user_123");
    expect(result.success).toBe(true);
    expect(result.remaining).toBe(4);
  });

  it("returns success=false when rate limit is exceeded", async () => {
    const mockLimiter = {
      limit: vi.fn().mockResolvedValue({
        success: false,
        remaining: 0,
        reset: Date.now() + 60000,
      }),
    } as unknown as Ratelimit;

    const result = await checkRateLimit(mockLimiter, "spammer_456");
    expect(result.success).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it("degrades gracefully to success=true if limiter throws a network error", async () => {
    const mockLimiter = {
      limit: vi.fn().mockRejectedValue(new Error("Upstash Redis unreachable")),
    } as unknown as Ratelimit;

    const result = await checkRateLimit(mockLimiter, "user_failover");
    // Fails open so real users aren't locked out if Redis experiences a temporary outage
    expect(result.success).toBe(true);
  });

  it("createRateLimiter returns an instance if redis is configured, or null if not", () => {
    const custom = createRateLimiter(5, "1 m", "test");
    if (redis) {
      expect(custom).not.toBeNull();
    } else {
      expect(custom).toBeNull();
    }
  });
});

describe("Redis Caching: Cache-Aside Wrapper", () => {
  it("fetchWithCache returns fresh data if cache is empty", async () => {
    const fetcher = vi.fn().mockResolvedValue({ status: "active", count: 42 });
    // Use an isolated test key
    const testKey = `test_cache_key_${Date.now()}`;
    const data = await fetchWithCache(testKey, fetcher, 60);

    expect(data).toEqual({ status: "active", count: 42 });
    expect(fetcher).toHaveBeenCalledTimes(1);

    // Clean up if redis is connected
    await deleteCache(testKey);
  });
});
