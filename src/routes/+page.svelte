<script lang='ts'>
    import writing from "./writing.yaml";
    import WritingList from "./WritingList.svelte";
</script>

<div class="flex flex-col items-center mt-10 py-5 gap-y-5">
    <div class="whitespace-nowrap">
        <h1 class="text-4xl font-bold">HSI-KANG HSU</h1>
    </div>
    <div class="font-serif">
        <div>
            Email: <a href="mailto:hsuhsikang@gmail.com" class="underline underline-offset-2">hsuhsikang@gmail.com</a>
        </div>
        <div>
            Github: <a href="https://github.com/cici30725" class="underline underline-offset-2">github.com/cici30725</a>
        </div>
    </div>
    <div class="max-w-xl">
        <p>
            I recently graduated from National Taiwan University with a master's degree in computer science.
            I wrote my thesis on efficient methods for pricing interest rate derivatives with the LIBOR Market Model (LMM).
        </p>
    </div>
</div>

<div class="flex flex-col items-start m-auto max-w-4xl">
    <div class="p-12">
        <h1 class="text-xl font-bold my-4">Notes</h1>
        <WritingList data={writing.notes} />
    </div>

    <div class="p-12">
        <h1 class="text-xl font-bold my-4">Academic Writing</h1>
        <WritingList data={writing.papers} />
    </div>
</div>
 
<style lang="postcss">
    :global(html) {
        background-color: #fefbf5;
    }
</style>