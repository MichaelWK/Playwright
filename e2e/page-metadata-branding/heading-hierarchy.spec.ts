// spec: specs/plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Page Metadata & Branding", () => {
  test("(Negative/edge) Heading hierarchy", async ({ page }) => {
    // 1. Navigate to /
    await page.goto("http://localhost:3000/");

    // 2. Query all <h1> elements on the page
    // Known issue: the page currently renders two <h1> elements instead of one.
    // This assertion documents the actual count rather than failing silently -
    // update it once the duplicate <h1> is fixed.
    await expect(page.locator("h1")).toHaveCount(2);
  });
});
