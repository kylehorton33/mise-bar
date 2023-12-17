<script lang="ts">
	export let missing: number;
    export let position: string = '';
</script>

<span
	class="badge {missing ? 'variant-soft-warning' : 'variant-filled-success'} {position}"
	>{missing}</span
>
