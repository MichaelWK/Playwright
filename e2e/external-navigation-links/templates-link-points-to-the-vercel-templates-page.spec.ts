// spec: specs/plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("External Navigation Links", () => {
  test('"Templates" link points to the Vercel templates page', async ({
    page,
  }) => {
    // 1. Navigate to /
    await page.goto("http://localhost:3000/");

    // 2. Locate the inline "Templates" link within the descriptive paragraph
    // 3. Verify its href attribute (do not need to fully navigate away since it opens in the same tab)
    await expect(page.getByRole("link", { name: "Templates" })).toHaveAttribute(
      "href",
      /^https:\/\/vercel\.com\/templates/,
    );
  });
});
