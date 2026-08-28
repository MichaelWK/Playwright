// spec: specs/plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Page Metadata & Branding", () => {
  test("Primary heading and instructional copy are visible", async ({
    page,
  }) => {
    // 1. Navigate to /
    await page.goto("http://localhost:3000/");

    // 2. Locate the heading containing "Create Next App"
    await expect(
      page.getByRole("heading", { name: "Create Next App" }),
    ).toBeVisible();

    // 3. Locate the heading/paragraph instructing the user to edit page.tsx, including the inline page.tsx code snippet
    const instructionHeading = page.getByRole("heading", {
      name: "To get started, edit the page",
    });
    await expect(instructionHeading).toBeVisible();
    await expect(instructionHeading.locator("code")).toHaveText("page.tsx");

    // 4. Locate the descriptive paragraph mentioning "Templates" and "Learning"
    await expect(page.getByText("Looking for a starting point")).toBeVisible();
  });
});
