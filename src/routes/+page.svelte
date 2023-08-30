<script lang='ts'>
    import Project from "./Project.svelte";
    import writing from "./writing.yaml";
    import WritingList from "./WritingList.svelte";

    const projects = import.meta.glob('../projects/*.md', { eager: true }) as any;
    const projectKeys = Object.keys(projects)

    const images = import.meta.glob("../projects/*.{png,jpg,svg}", {
        eager: true,
    }) as any;

    // $: html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
</script>

<div class="flex flex-col items-center my-10 py-5 gap-y-5">
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

<fieldset class="border-t border-gray-500">
    <legend class="mx-auto px-4 text-black text-2xl italic">Projects</legend>
</fieldset>

{#each projectKeys as id (id)}
    <section class="py-10">
        <div class="mx-auto max-w-[1152px] px-4 sm:px-6">
        <Project data={projects[id]} {images}/>
        </div>
    </section>
{/each}

<fieldset class="border-t border-gray-500">
    <legend class="mx-auto px-4 text-black text-2xl italic">Writings</legend>
</fieldset>

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