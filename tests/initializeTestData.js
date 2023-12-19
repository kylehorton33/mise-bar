import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

const recipes = [
	{
		name: 'Negroni',
		slug: 'negroni',
		instructions:
			'Stir all ingredients over ice, then strain into an Old-Fashioned glass over 1 large ice cube. Garnish with 1 orange half-wheel.'
	},
	{
		name: 'Boulevardier',
		slug: 'boulevardier',
		instructions:
			'Stir all ingredients over ice, then strain into a chilled coupe. Garnish with 1 brandied cherry.'
	},
	{
		name: 'Last Word',
		slug: 'last-word',
		instructions:
			'Shake all ingredients with ice, then strain into a chilled coupe. Garnish with 2 brandied cherries.'
	},
	{
		name: 'Naked and Famous',
		slug: 'naked-and-famous',
		instructions:
			'Shake all ingredients with ice, then strain into a chilled coupe. Garnish with 1 lime wedge.'
	},
	{
		name: 'Paper Plane',
		slug: 'paper-plane',
		instructions:
			'Shake all ingredients with ice, then strain into a chilled coupe. Garnish with 1 lime wedge.'
	},
	{
		name: 'Old-Fashioned',
		slug: 'old-fashioned',
		instructions:
			'Muddle the sugar cube and bitters into an Old-Fashioned glass. Add the boubon and 1 large ice cube and stir until chilled. Ganish with 1 orange twist.'
	},
	{
		name: 'Sazerac',
		slug: 'sazerac',
		instructions:
			'Rinse an Old-Fashioned glass with abinsth and dump. Stir the remaining ingredients over ice, then strain into the glass. Express the lemon twist over the drink and place on rim of glass.'
	},
	{
		name: 'Manhattan',
		slug: 'manhattan',
		instructions:
			'Stir all ingredients over ice, then strain into a chilled Nick & Nora glass. Garnish with 1 brandied cherry.'
	},
	{
		name: 'White Negroni',
		slug: 'white-negroni',
		instructions:
			'Stir all the ingredients over ice, then strain into an Old-Fashioned glass over 1 large ice cube. Express 1 orange twist over the drink, gently rub around the rim of the glass and place it into the drink.'
	},
	{
		name: 'Daiquiri',
		slug: 'daiquiri',
		instructions:
			'Shake all ingredients with ice, then strain into a chilled coupe. Ganish with 1 lime wedge.'
	},
	{
		name: 'Gin and Tonic',
		slug: 'gin-and-tonic',
		instructions:
			'Pour the gin into a Highball glass, then add 3 ice cubes. Stir for 3 seconds. Add the tonic water and stir once. Garnish with 1 lime wedge.'
	},
	{
		name: 'Aperol Spritz',
		slug: 'aperol-spritz',
		instructions:
			'Pour the Aperol into a wineglass. Fill the glass with ice cubes, then pour in the sparkling wine and seltzer and stir. Garnish with 1 orange wedge.'
	}
];

const ingredients = [
	{ unit: 'oz', name: 'Campari' },
	{ unit: 'oz', name: 'gin' },
	{ unit: 'oz', name: 'sweet vermouth' },
	{ unit: 'oz', name: 'bourbon' },
	{ unit: 'oz', name: 'green Chartreuse' },
	{ unit: 'oz', name: 'maraschino liqueur' },
	{ unit: 'oz', name: 'lime juice' },
	{ unit: 'oz', name: 'mezcal' },
	{ unit: 'oz', name: 'yellow Chartreuse' },
	{ unit: 'oz', name: 'Aperol' },
	{ unit: 'oz', name: 'Amaro Nonino' },
	{ unit: 'oz', name: 'lemon juice' },
	{ unit: 'dash', name: 'Angostura bitters' },
	{ name: 'sugar cube' },
	{ unit: 'oz', name: 'absinthe' },
	{ unit: 'oz', name: 'rye' },
	{ unit: 'oz', name: 'Cognac' },
	{ unit: 'tsp', name: 'demerara syrup' },
	{ unit: 'dash', name: "Peychaud's bitters" },
	{ unit: 'oz', name: 'dry vermouth' },
	{ unit: 'oz', name: 'Lillet Blanc' },
	{ unit: 'oz', name: 'Suze' },
	{ unit: 'oz', name: 'prosecco' },
	{ unit: 'oz', name: 'seltzer' },
	{ unit: 'oz', name: 'tonic water' },
	{ unit: 'oz', name: 'rum' },
	{ unit: 'oz', name: 'simple syrup' }
];

function getIng(name) {
	return (
		ingredients.find((i) => i.name == name) || {
			name: '-',
			unit: '-',
			inStock: false
		}
	);
}

const ingredientLines = [
	// Negroni
	{ recipe: 'j88ygws6q3jzbxr', ingredient: getIng('Campari'), quantity: 1 },
	{ recipe: 'j88ygws6q3jzbxr', ingredient: getIng('gin'), quantity: 1 },
	{
		recipe: 'j88ygws6q3jzbxr',
		ingredient: getIng('sweet vermouth'),
		quantity: 1
	},
	// Boulevardier
	{ recipe: '05cx5y6wsd2jn0a', ingredient: 'kjck2sy8mzwhmqc', quantity: 1.5 },
	{ recipe: '05cx5y6wsd2jn0a', ingredient: getIng('Campari'), quantity: 0.75 },
	{
		recipe: '05cx5y6wsd2jn0a',
		ingredient: getIng('sweet vermouth'),
		quantity: 0.75
	},
	// Last Word
	{ recipe: 'tq1jjguoem6k312', ingredient: getIng('gin'), quantity: 0.75 },
	{
		recipe: 'tq1jjguoem6k312',
		ingredient: getIng('green Chartreuse'),
		quantity: 0.75
	},
	{
		recipe: 'tq1jjguoem6k312',
		ingredient: getIng('maraschino liqueur'),
		quantity: 0.75
	},
	{
		recipe: 'tq1jjguoem6k312',
		ingredient: getIng('lime juice'),
		quantity: 0.75
	},
	// Naked and Famous
	{ recipe: 'tlipkltk8bec9bi', ingredient: 'wco7ue4sm7y006v', quantity: 0.75 },
	{ recipe: 'tlipkltk8bec9bi', ingredient: 'ojr9uq9o67ybvru', quantity: 0.75 },
	{ recipe: 'tlipkltk8bec9bi', ingredient: 'f4uq4leal89dkpo', quantity: 0.75 },
	{ recipe: 'tlipkltk8bec9bi', ingredient: 'yj4vzf02ppkjvlb', quantity: 0.75 },
	// Paper Plane
	{ recipe: '17jcreh06ct186t', ingredient: 'kjck2sy8mzwhmqc', quantity: 0.75 },
	{ recipe: '17jcreh06ct186t', ingredient: 'f4uq4leal89dkpo', quantity: 0.75 },
	{ recipe: '17jcreh06ct186t', ingredient: 'buujjbouuim5ps2', quantity: 0.75 },
	{ recipe: '17jcreh06ct186t', ingredient: 'ii06k2u2p43jw72', quantity: 0.75 },
	// Old-Fashioned
	{ recipe: '4cop4yvifpzunh9', quantity: 1, ingredient: '85wwxojsmskxje5' },
	{ recipe: '4cop4yvifpzunh9', quantity: 2, ingredient: 'wob391xyouj390g' },
	{ recipe: '4cop4yvifpzunh9', quantity: 2, ingredient: 'kjck2sy8mzwhmqc' },
	// Sazerac
	{ recipe: 'veisl8sjai4i6xa', quantity: 0.25, ingredient: 'cfroiktuz05s2zi' },
	{ recipe: 'veisl8sjai4i6xa', quantity: 1.5, ingredient: 'jwcqcf1g4ag5p7q' },
	{ recipe: 'veisl8sjai4i6xa', quantity: 0.5, ingredient: 'u93b4n40ncvjbrv' },
	{ recipe: 'veisl8sjai4i6xa', quantity: 1, ingredient: '34c8ja4sh8ly98j' },
	{ recipe: 'veisl8sjai4i6xa', quantity: 4, ingredient: 'u6t18ptsdgdvk4h' },
	{ recipe: 'veisl8sjai4i6xa', quantity: 1, ingredient: 'wob391xyouj390g' },
	// Manhattan
	{ recipe: 'eycesvzoyzppuxu', quantity: 2, ingredient: 'jwcqcf1g4ag5p7q' },
	{ recipe: 'eycesvzoyzppuxu', quantity: 1, ingredient: '2r85p9mk3o2573k' },
	{ recipe: 'eycesvzoyzppuxu', quantity: 2, ingredient: 'wob391xyouj390g' },
	// White Negroni
	{ recipe: 'symsbcyvywoo28b', quantity: 1.5, ingredient: 'ymrqonytbxfocpe' },
	{ recipe: 'symsbcyvywoo28b', quantity: 1, ingredient: 'r1y34s61zuinp4e' },
	{ recipe: 'symsbcyvywoo28b', quantity: 0.75, ingredient: '05x92u802vtq1h1' },
	// Daiquiri
	{ recipe: 'ltwzx3b0d32vvyq', quantity: 2, ingredient: '9tiabng6p0h1de4' },
	{ recipe: 'ltwzx3b0d32vvyq', quantity: 0.75, ingredient: 'yj4vzf02ppkjvlb' },
	{ recipe: 'ltwzx3b0d32vvyq', quantity: 0.75, ingredient: 'stxdxunggqvg1fw' },
	// Gin and Tonic
	{ recipe: 'vixeh4zuuhlqfkz', quantity: 2, ingredient: 'ymrqonytbxfocpe' },
	{ recipe: 'vixeh4zuuhlqfkz', quantity: 4, ingredient: 'mf5vdv2dvducl1q' },
	// Aperol Spritz
	{ recipe: '9vdkdvepch3twni', quantity: 2, ingredient: 'f4uq4leal89dkpo' },
	{ recipe: '9vdkdvepch3twni', quantity: 3, ingredient: '7r4xjm5xraqk9v1' },
	{ recipe: '9vdkdvepch3twni', quantity: 1, ingredient: '19bf8j9jcwgpvcb' }
];

console.log('CREATING RECIPES');
recipes.forEach(async (data) => {
	try {
		//await pb.collection('recipes').create(data, { requestKey: data.slug });
		//console.log(`[${data.name}]: OK`)
	} catch (error) {
		console.log(`[${data.name}]: `, error.response.message);
	}
});

console.log('CREATING INGREDIENTS');
ingredients.forEach(async (data) => {
	try {
		//await pb.collection('ingredients').create(data, { requestKey: data.name });
		//console.log(`[${data.name}]: OK`)
	} catch (error) {
		console.log(`[${data.name}]: `, error.response.data);
	}
});

console.log('CREATING LINES');
ingredientLines.forEach(async (data) => {
	try {
		await pb
			.collection('ingredientLines')
			.create(data, { requestKey: `${data.recipe}${data.ingredient}` });
		console.log(`[${data.recipe}]: OK`);
	} catch (error) {
		console.log(`[${data.recipe}]: `, error.response.data);
	}
});
