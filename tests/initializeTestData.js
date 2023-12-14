import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

import { ingredients, recipes, ingredientLines } from './testData.js'

console.log('Creating ingredients...')
ingredients.forEach(async (data) => {
    try {
        await pb.collection('ingredients').create(data, { requestKey: data.id });
        console.log(`[${data.name}]: OK`)
    } catch (error) {
        console.log(`[${data.name}]: `, error.response.message)
    }

})

console.log('Creating recipes...')
recipes.forEach(async (data) => {

    try {
        await pb.collection('recipes').create(data, { requestKey: data.id });
        console.log(`[${data.name}]: OK`)
    } catch (error) {
        console.log(`[${data.name}]: `, error.response.message)
    }
})

console.log('Creating ingredientLines...')
ingredientLines.forEach(async (data) => {

    try {
        await pb.collection('ingredientLines').create(data, { requestKey: data.id });
        console.log(`[${data.id}]: OK`)
    } catch (error) {
        console.log(`[${data.id}]: `, error.response.message)
    }
})