export function createSlug(text: string): string {
	const slug = text
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
	return slug;
}

export function sortByName(array: Ingredient[]): Ingredient[] {
	return array.sort((a, b) => {
		var A = a.name.toUpperCase();
		var B = b.name.toUpperCase();
		return (A < B) ? -1 : (A > B) ? 1 : 0
	})
}