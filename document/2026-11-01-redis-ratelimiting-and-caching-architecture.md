# Architecture & Integration: Upstash Redis Rate Limiting & High-Performance Caching

**Date**: 2026-11-01  
**Author**: Antigravity Assistant & Engineering Team  
**Scope**: Security, API Protection, Serverless Caching  
**Branch**: `feature/redis-ratelimiting-and-caching`

---

## 1. Overview
This module integrates Upstash Serverless Redis via `@upstash/redis` (REST-based, zero TCP connection overhead, edge and serverless ready) and `@upstash/ratelimit` into the AONIC TECH platform.

It delivers two core capabilities:
1. **Sliding-Window Rate Limiting**:
   - Guards public API routes (e.g. quote & inquiry submission `/api/contact`) against automated bots, credential stuffing, and spam attacks.
   - Built-in graceful degradation: if Redis credentials are not configured or connection fails, API requests safely proceed without breaking user workflows.
2. **Serverless Cache-Aside Engine**:
   - `getCache<T>(key)`: Fast retrieval of cached JSON datasets in ~5ms.
   - `setCache(key, data, ttlSeconds)`: Sets key with automatic expiration (TTL).
   - `deleteCache(key)`: Targeted cache invalidation upon updates.
   - `fetchWithCache<T>(key, fetcher, ttlSeconds)`: Canonical cache-aside helper that fetches from cache first, executes backend query on cache miss, and caches result.

---

## 2. Configuration & Environment Variables
Required variables:
- `UPSTASH_REDIS_REST_URL`: Upstash REST endpoint URL (e.g. `https://<db-name>.upstash.io`).
- `UPSTASH_REDIS_REST_TOKEN`: Upstash bearer access token.

---

## 3. Architecture & Code Structure
- [`src/lib/redis.ts`](file:///Users/surojuhomsaisantosh/Documents/PROJECTS/3%20AONITECH/1%20WEBSITE/src/lib/redis.ts): Centralized singleton, pre-configured rate limiters (`contactRateLimiter`, `apiRateLimiter`), custom factory `createRateLimiter`, and caching utilities.
- [`src/app/api/contact/route.ts`](file:///Users/surojuhomsaisantosh/Documents/PROJECTS/3%20AONITECH/1%20WEBSITE/src/app/api/contact/route.ts): Refactored to leverage `checkRateLimit` and `contactRateLimiter`.
