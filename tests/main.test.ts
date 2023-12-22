import { expect, test } from '@playwright/test';

test('index page has expected heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'mise' })).toBeVisible();
});

test('test links work', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'bottle-icon Ingredients' }).click();
	await expect(
		page.getByRole('heading', { name: 'Ingredients' })
	).toBeVisible();
	await page.getByRole('link', { name: 'glass-icon Recipes' }).click();
	await expect(page.getByRole('heading', { name: 'Recipes' })).toBeVisible();
	await page.getByRole('link', { name: 'About' }).click();
	await expect(page.getByRole('heading', { name: 'How to use' })).toBeVisible();
});
