import { expect, test } from '@playwright/test';

test.beforeEach('goto ingredients page', async ({ page }) => {
	await page.goto('/ingredients');
});

test('expected content', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Ingredients' })).toBeVisible();
	await expect(page.getByRole('listitem')).toHaveCount(27);
	await expect(
		page.locator('label').filter({ hasText: 'bourbon' }).getByRole('checkbox')
	).not.toBeChecked();
});
