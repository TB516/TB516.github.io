<script lang="ts">
  import type { ResumeEntry } from "$lib/resume/schema";

  import OverviewEntry from "./OverviewEntry.svelte";

  let {
    id,
    title,
    entries,
  }: {
    id: string;
    title: string;
    entries: readonly ResumeEntry[];
  } = $props();
</script>

<section class="resume-section container" {id} aria-labelledby={`${id}-heading`}>
  <h2 class="section-heading" id={`${id}-heading`}>{title}</h2>
  <div class="entry-list" class:multiple={entries.length > 1}>
    {#each entries as entry}<OverviewEntry {entry} />{/each}
  </div>
</section>

<style>
  section {
    container-type: inline-size;
  }
  .entry-list {
    display: grid;
    gap: 32px;
    grid-template-columns: minmax(0, 1fr);
  }
  @container (min-width: 850px) {
    .entry-list.multiple {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
