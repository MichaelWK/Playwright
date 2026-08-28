// spec: specs/plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Appearance / Theming', () => {
  test('Dark color scheme renders correctly', async ({ page }) => {
    // 1. Emulate prefers-color-scheme: dark
    await page.emulateMedia({ colorScheme: 'dark' });

    // 2. Navigate to /
    await page.goto('http://localhost:3000/');

    // 3. Read the computed background color of the page body/main
    await expect(page.locator('.bg-zinc-50')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
  });
});
