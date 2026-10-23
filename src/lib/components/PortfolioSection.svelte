<script lang="ts">
  import type { CardContent } from "./cards";
  import OverviewEntry from "./OverviewEntry.svelte";

  let {
    id,
    title,
    cards,
    hideHeading = false,
  }: {
    id: string;
    title: string;
    cards: readonly CardContent[];
    hideHeading?: boolean;
  } = $props();
</script>

<section
  class="resume-section"
  {id}
  aria-label={hideHeading ? title : undefined}
  aria-labelledby={hideHeading ? undefined : `${id}-heading`}
>
  {#if !hideHeading}<h2 class="section-heading" id={`${id}-heading`}>{title}</h2>{/if}
  <div class="entry-list" class:multiple={cards.length > 1}>
    {#each cards as card}<OverviewEntry {...card} />{/each}
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
