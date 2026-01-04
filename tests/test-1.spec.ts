import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.learnaqa.info/');
  await page.getByRole('button', { name: 'Sign In' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('adenugaadeyemiisaac@gmail.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('Hardayemmh4$');
  await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('span').filter({ hasText: 'Drag & Drop' }).click();
  await page.locator('span').filter({ hasText: 'Drag & Drop' }).click();
});