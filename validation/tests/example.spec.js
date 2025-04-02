// @ts-check
import { test, expect } from '@playwright/test';


test.beforeEach(async ({page}) => {
  await page.goto('');
  await page.waitForLoadState('load');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Home Page/);
});

test('new greeting button', async ({ page }) => {
  let greetingArray = ["Hej! Thank you for visiting!", "Hallo! Thank you for visiting!", "Hola! Thank you for visiting!", "Habari! Thank you for visiting!"];

  let initialGreeting = await page.getByTestId('greeting').allInnerTexts();
  await page.getByText('New Greeting').click();
  expect(greetingArray).toEqual(expect.arrayContaining(initialGreeting));
});

