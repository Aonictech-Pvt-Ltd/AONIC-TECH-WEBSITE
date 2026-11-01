import { describe, it, expect } from "vitest";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";

describe("Phone Validation: libphonenumber-js", () => {
  it("validates valid 10-digit Indian mobile numbers without country code", () => {
    const validIndianNumbers = [
      "9704166455",
      "9876543210",
      "7012345678",
      "8123456789",
      "6301234567",
    ];

    for (const num of validIndianNumbers) {
      expect(isValidPhoneNumber(num, "IN")).toBe(true);
    }
  });

  it("validates valid Indian mobile numbers with country code (+91)", () => {
    const validWithCode = [
      "+919704166455",
      "+91 97041 66455",
      "+91 98765 43210",
      "+91-97041-66455",
    ];

    for (const num of validWithCode) {
      expect(isValidPhoneNumber(num, "IN") || isValidPhoneNumber(num)).toBe(true);
    }
  });

  it("formats Indian numbers to clean international E.164 and RFC3966 standards", () => {
    const parsed = parsePhoneNumber("9704166455", "IN");
    expect(parsed).toBeDefined();
    expect(parsed?.formatInternational()).toBe("+91 97041 66455");
    expect(parsed?.number).toBe("+919704166455");
    expect(parsed?.country).toBe("IN");
  });

  it("validates international phone numbers with proper country code", () => {
    // US number
    expect(isValidPhoneNumber("+14155552671")).toBe(true);
    // UK number
    expect(isValidPhoneNumber("+447911123456")).toBe(true);
    // UAE / Dubai number
    expect(isValidPhoneNumber("+971501234567")).toBe(true);
  });

  it("rejects invalid, malformed, or fake phone numbers", () => {
    const invalidNumbers = [
      "12345",
      "abcdefghij",
      "0000000000",
      "99999",
      "+91 123",
      "97041",
      "012345",
      "",
    ];

    for (const num of invalidNumbers) {
      const isValid = isValidPhoneNumber(num, "IN") || isValidPhoneNumber(num);
      expect(isValid).toBe(false);
    }
  });
});
