<script lang='ts'>
    import writing from "./writing.yaml";
    import WritingList from "./WritingList.svelte";
</script>

<div class="flex flex-col items-center mt-10 py-5 gap-y-5">
    <div class="whitespace-nowrap">
        <h1 class="text-3xl font-bold">HSI-KANG HSU</h1>
    </div>
    <div class="max-w-xl">
        <p>
            I recently graduated with a Master's degree in Computer Science from National Taiwan University.
            I wrote my thesis on efficient methods for pricing interest rate derivatives with the LIBOR Market Model (LMM).
        </p>
    </div>
</div>

<section class="p-12 ml-40">
    <h1 class="text-xl font-bold my-4">Notes</h1>
    <WritingList data={writing.notes} />
</section>

<section class="p-12 ml-40">
    <h1 class="text-xl font-bold my-4">Academic Writing</h1>
    <WritingList data={writing.papers} />
</section>
 
<style lang="postcss">
    :global(html) {
        background-color: #fefbf5;
    }
</style>