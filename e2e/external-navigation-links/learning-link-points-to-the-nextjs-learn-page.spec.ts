// spec: specs/plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("External Navigation Links", () => {
  test('"Learning" link points to the Next.js Learn page', async ({ page }) => {
    // 1. Navigate to /
    await page.goto("http://localhost:3000/");

    // 2. Locate the inline "Learning" link within the descriptive paragraph
    // 3. Verify its href attribute
    await expect(page.getByRole("link", { name: "Learning" })).toHaveAttribute(
      "href",
      /^https:\/\/nextjs\.org\/learn/,
    );
  });
});
