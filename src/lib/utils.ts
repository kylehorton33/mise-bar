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
		return A < B ? -1 : A > B ? 1 : 0;
	});
}

// returns HTML to display fractions styled with TailwindCSS from a decimal number: n
// [CURRENTLY ONLY WORKS WITH 1/4's]
export function fractionHTML(n: number): string {

	if (n / 0.25 === 1) {
		return `${n}` // contingency if not evenly divisable by 4
	}

	const dec = n % 1

	const num = (dec * 4) % 2 ? dec * 4 : 1;
	const den = (dec * 4) % 2 ? 4 : 2;

	let rawHTML = ''

	if (Math.floor(n)) {
		rawHTML += `<span>${Math.floor(n)}</span>`
	}

	if (dec) {
		rawHTML += `<span class="diagonal-fractions">${num}/${den}</span>`
	}

	return rawHTML;
}
