import { expect, test } from '@playwright/test';

test.beforeEach('goto recipes page', async ({ page }) => {
	await page.goto('/recipes');
});

test('expected content', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Recipes' })).toBeVisible();
	await expect(page.getByRole('listitem')).toHaveCount(2);
	await page.getByRole('link', { name: 'negroni' }).click();
	await expect(page.getByRole('heading', { name: 'negroni' })).toBeVisible();
});
