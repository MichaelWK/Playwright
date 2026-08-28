import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.locator(".DocSearch-Button-Container").click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator(".DocSearch-Form")).toBeVisible();
  await page.locator(".DocSearch-Input").fill("test");
});
test("get started link and click", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Vercel logomark Deploy Now" }).click();
  const page1 = await page1Promise;
  await expect(
    page1.getByRole("textbox", { name: "v0 Prompt or Git Repository" }),
  ).toBeVisible();
  await expect(page1.locator("#new-import-url-form")).toContainText(
    "Contact Form",
  );
});
