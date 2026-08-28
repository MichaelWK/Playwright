// spec: specs/plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Static Assets & Accessibility", () => {
  test("Favicon is served", async ({ page }) => {
    // 1. Request /favicon.ico directly (or check the <link rel="icon"> response)
    const response = await page.request.get(
      "http://localhost:3000/favicon.ico",
    );

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toMatch(/^image\//);
  });
});
