// spec: specs/plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Static Assets & Accessibility", () => {
  test("Vercel logomark image has accessible alt text", async ({ page }) => {
    // 1. Navigate to /
    const [vercelLogoResponse] = await Promise.all([
      page.waitForResponse((response) =>
        response.url().endsWith("/vercel.svg"),
      ),
      page.goto("https://playwright-eight.vercel.app/"),
    ]);

    // 2. Locate the image inside the "Deploy Now" link
    const vercelLogo = page
      .getByRole("link", { name: "Vercel logomark Deploy Now" })
      .getByRole("img", { name: "Vercel logomark" });
    await expect(vercelLogo).toBeVisible();
    await expect(vercelLogo).toHaveAttribute("alt", "Vercel logomark");
    expect(vercelLogoResponse.ok()).toBeTruthy();
  });
});
