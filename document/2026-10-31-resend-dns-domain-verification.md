# Resend DNS Records & Domain Verification Guide for aonictech.com

**Domain:** `aonictech.com`  
**Provider / Service:** Resend Transactional Email  
**Documentation:** https://resend.com/docs/dashboard/domains/introduction

---

## 1. Required DNS Records (Exact Values)

### Record 1: DKIM Authentication
- **Type:** `TXT`
- **Name / Host:** `resend._domainkey` (or `resend._domainkey.aonictech.com` depending on registrar)
- **Value:** `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDZa3f6x7r0c1UzULEOWEo1TrGgn8aT/mQhD1SInw6YzGsiovR8i6fZXljHwhJTAZ/m0E2KNBCR/VHGN3yaUG8GFMBYTnvNiH+btBVPShDprgcbQZi6xKJjoj3qCUKfydst8TujCmchBYymjpeRngvPEcgeT/DNNe1ZwnsYOOeA8QIDAQAB`
- **TTL:** `Auto` (or `3600` / 1 hour)
- **Priority:** None / Leave blank

### Record 2: SPF / Mail Return Path
- **Type:** `CNAME`
- **Name / Host:** `rsend` (or `rsend.aonictech.com`)
- **Value:** `rsend-apne1.forge.rmta.net`
- **TTL:** `Auto` (or `3600` / 1 hour)
- **Priority:** None / Leave blank

### Record 3: Sending Domain CNAME
- **Type:** `CNAME`
- **Name / Host:** `send` (or `send.aonictech.com`)
- **Value:** `send.forge.rmta.net`
- **TTL:** `Auto` (or `3600` / 1 hour)
- **Priority:** None / Leave blank

---

## 2. Potential DNS Conflicts to Watch Out For

1. **Root Domain SPF vs Subdomain SPF:**
   - Resend uses subdomains `send` and `rsend` for bounce and SPF handling. This means it **does NOT** overwrite or conflict with any existing root `@` domain SPF records (e.g. Google Workspace `v=spf1 include:_spf.google.com ~all` or Microsoft 365).
2. **Cloudflare Proxying (Crucial):**
   - If using Cloudflare, make sure the **Proxy Status** for both CNAME records (`send` and `rsend`) is set to **DNS Only (Grey Cloud)**, NOT Proxied (Orange Cloud). If proxied, Resend verification will fail.
3. **Trailing Period Syntax:**
   - Some DNS managers (like AWS Route 53 or BIND) require a trailing period: `send.forge.rmta.net.` while most UI dashboards (GoDaddy, Cloudflare, Namecheap, Hostinger) do not.

