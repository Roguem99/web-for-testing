// @ts-check
import { test, expect } from '@playwright/test';


test.beforeEach(async ({page}) => {
  await page.goto('');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Home Page/);
});

test('new greeting button', async ({ page }) => {
  // Get existing greeting to compare later
  let initialGreeting = await page.getByTestId('greeting').allInnerTexts();

  // Click the new greeting button to get a new greeting change.
  await page.getByText('New Greeting').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('greeting')).not.toHaveText(initialGreeting);
});

