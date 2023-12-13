import { expect, test } from '@playwright/test';

test('index page has expected heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'mise' })).toBeVisible();
});

test('test links work', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: '(icon) Ingredients' }).click();
  await expect(page.locator('#route')).toContainText('TODO ingredients page');
  await page.getByRole('link', { name: '(icon) Recipes' }).click();
  await expect(page.locator('#route')).toContainText('TODO recipes page');
  await page.getByRole('link', { name: '(icon) About' }).click();
  await expect(page.locator('#route')).toContainText('TODO about page');
});