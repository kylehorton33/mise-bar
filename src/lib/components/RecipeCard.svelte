<script lang="ts">
	export let filterTerm: string;

    export let name: string;
	export let slug: string;
	export let ingredients: IngredientLineData[];
	export let missing: number;

    function listIngredients(ingredients: IngredientLineData[]) {
		return ingredients.map((i) => i.ingredient?.name).join(' | ');
	}
</script>

<li class={name.toLocaleLowerCase().includes(filterTerm.toLowerCase()) ? '' : 'hidden'}>
    <a href="/recipes/{slug}">
        <div class="block card card-hover p-2 w-72 h-32 mx-auto relative rounded-lg">
            <span
                class="badge {missing
                    ? 'variant-soft-warning'
                    : 'variant-filled-success'} absolute top-3 right-3">{missing}</span
            >
            <header class="card-header uppercase">{name}</header>
            <section class="p-4 text-xs">
                {listIngredients(ingredients)}
            </section>
        </div>
    </a>
</li>