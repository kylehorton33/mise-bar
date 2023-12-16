import { expect, test } from '@playwright/test';

test.beforeEach('goto recipes page', async ({ page }) => {
	await page.goto('/recipes');
});

test('expected content', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Recipes' })).toBeVisible();
	await expect(page.getByRole('listitem')).toHaveCount(12);
	await page.getByRole('link', { name: 'Last Word' }).click();
	await expect(page.getByRole('heading', { name: 'Last Word' })).toBeVisible();
});
