// spec: specs/plan.md
// seed: e2e/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Appearance / Theming', () => {
  test('Light color scheme renders correctly', async ({ page }) => {
    // 1. Emulate prefers-color-scheme: light
    await page.emulateMedia({ colorScheme: 'light' });

    // 2. Navigate to /
    await page.goto('http://localhost:3000/');

    // 3. Read the computed background color of the page body/main
    const themedContainer = page.locator('.bg-zinc-50');
    await expect(themedContainer).not.toHaveCSS('background-color', 'rgb(0, 0, 0)');
    await expect(themedContainer).toHaveCSS('background-color', /^(rgb\(2[0-9]{2}, ?2[0-9]{2}, ?2[0-9]{2}\)|lab\(9\d)/);
  });
});
