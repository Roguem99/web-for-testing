// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  // await page.goto('', {waitUntil:"load"});
  await page.goto('https://comfy-cannoli-c12022.netlify.app', {waitUntil:"load"});
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Home Page/);
});

test('has light dark toggle', async ({ page }) => {
  await expect(page.getByTestId('icon-sun')).toBeVisible();
  await expect(page.getByTestId('icon-moon')).toBeVisible();
});

test('has page buttons', async ({ page }) => {
  await expect(page.getByTestId('home-link-btn')).toBeVisible();
  await expect(page.getByTestId('about-link-btn')).toBeVisible();
  await expect(page.getByTestId('blog-link-btn')).toBeVisible();
  await expect(page.getByTestId('tags-link-btn')).toBeVisible();
});

test('has button that creates new greeting', async ({ page }) => {
  let greetingArray = [
    "Hej! Thank you for visiting!",
    "Hallo! Thank you for visiting!",
    "Hola! Thank you for visiting!",
    "Habari! Thank you for visiting!"
  ];

  let initialGreeting = await page.getByTestId('greeting').allInnerTexts();
  await page.getByText('New Greeting').click();
  expect(greetingArray).toEqual(expect.arrayContaining(initialGreeting));
});

test('has social links', async ({ page }) => {
  await expect(page.getByTestId('social-linkedin')).toBeVisible();
  await expect(page.getByTestId('social-github')).toBeVisible();
});
