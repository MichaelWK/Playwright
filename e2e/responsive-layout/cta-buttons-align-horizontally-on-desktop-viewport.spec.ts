// spec: specs/plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Responsive Layout", () => {
  test("CTA buttons align horizontally on desktop viewport", async ({
    page,
  }) => {
    // 1. Set viewport to a desktop size (1280x800)
    await page.setViewportSize({ width: 1280, height: 800 });

    // 2. Navigate to /
    await page.goto("http://localhost:3000/");

    // 3. Compare the bounding boxes of the "Deploy Now" and "Documentation" links
    const deployNowBox = await page
      .getByRole("link", { name: "Vercel logomark Deploy Now" })
      .boundingBox();
    const documentationBox = await page
      .getByRole("link", { name: "Documentation" })
      .boundingBox();

    expect(deployNowBox).not.toBeNull();
    expect(documentationBox).not.toBeNull();
    expect(documentationBox!.y).toBe(deployNowBox!.y);
    expect(documentationBox!.x).toBeGreaterThanOrEqual(
      deployNowBox!.x + deployNowBox!.width,
    );
  });
});
