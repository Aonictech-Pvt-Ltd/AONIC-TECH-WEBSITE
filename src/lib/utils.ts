import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Escapes characters that have special meaning in HTML contexts.
 * Prevents HTML injection and stored/reflected XSS in email templates and rendered content.
 */
export function escapeHtml(str: unknown): string {
  if (str === null || str === undefined) return "";
  const s = String(str);
  const matchHtmlRegExp = /["'&<>]/;
  const match = matchHtmlRegExp.exec(s);

  if (!match) {
    return s;
  }

  let escape;
  let html = "";
  let index = 0;
  let lastIndex = 0;

  for (index = match.index; index < s.length; index++) {
    switch (s.charCodeAt(index)) {
      case 34: // "
        escape = "&quot;";
        break;
      case 38: // &
        escape = "&amp;";
        break;
      case 39: // '
        escape = "&#39;";
        break;
      case 60: // <
        escape = "&lt;";
        break;
      case 62: // >
        escape = "&gt;";
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += s.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + s.substring(lastIndex, index) : html;
}

/**
 * Strips carriage returns and newlines to prevent email header injection (CRLF injection).
 */
export function sanitizeSubject(str: unknown, maxLength = 100): string {
  if (!str) return "";
  return String(str)
    .replace(/[\r\n\t]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/**
 * Trims, strips control characters, and truncates input strings to prevent payload bloat / DoS.
 */
export function sanitizeInput(str: unknown, maxLength = 500): string {
  if (typeof str !== "string") return "";
  // Strip null bytes and ASCII control characters except standard whitespace
  const sanitized = str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "").trim();
  return sanitized.slice(0, maxLength).trim();
}
