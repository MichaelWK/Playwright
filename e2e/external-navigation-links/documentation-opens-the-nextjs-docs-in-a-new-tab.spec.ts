// spec: specs/plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("External Navigation Links", () => {
  test('"Documentation" opens the Next.js docs in a new tab', async ({
    page,
    context,
  }) => {
    // 1. Navigate to /
    await page.goto("http://localhost:3000/");

    // 2. Click the link named "Documentation"
    // 3. Wait for the popup/new tab to open
    const popupPromise = context.waitForEvent("page");
    await page.getByRole("link", { name: "Documentation" }).click();
    const popup = await popupPromise;

    await expect(popup).toHaveURL(/^https:\/\/nextjs\.org\/docs/);
  });
});
