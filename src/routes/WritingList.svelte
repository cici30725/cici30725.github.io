<script lang="ts">
    import { ExternalLink } from 'lucide-svelte';
    type Writing = {
        title: string;
        summary: string;
        link: string
    }
    export let data: Writing[];
</script>

{#each data as item}
    <div>
        <div class="text-lg text-black">
            {item.title}
            <a href={item.link} target="_blank">
                <ExternalLink class="inline"/>
            </a>
        </div>
        <p class="font-serif italic">{item.summary}</p>
    </div>
{/each}