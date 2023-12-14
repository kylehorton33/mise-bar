import { expect, test } from '@playwright/test';
import { ingredients } from './testData'; 

test.beforeEach('goto ingredients page', async ({ page }) => {
	await page.goto('/ingredients');
});

test('expected content', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Ingredients' })).toBeVisible();
	await expect(page.getByRole('listitem')).toHaveCount(ingredients.length);
	await expect(
		page.locator('label').filter({ hasText: 'bourbon' }).getByRole('checkbox')
	).not.toBeChecked();
	await expect(
		page.locator('label').filter({ hasText: 'Campari' }).getByRole('checkbox')
	).toBeChecked();
});
