<script lang="ts">
  import OverviewEntry from "./OverviewEntry.svelte";

  let {
    id,
    title,
    entries,
    alternate = false,
  }: {
    id: string;
    title: string;
    entries: Array<{
      date: string;
      primaryLabel: string;
      primaryTitle: string;
      primaryMeta?: string;
      roleTitle: string;
      summary: string;
      href: string;
    }>;
    alternate?: boolean;
  } = $props();
</script>

<section class:alternate class="portfolio-section" {id}>
  <div class="section-inner">
    <h2>{title}</h2>
    <div class="entry-list">
      {#each entries as entry (`${entry.primaryTitle}-${entry.date}`)}
        <OverviewEntry {...entry} />
      {/each}
    </div>
  </div>
</section>

<style>
  .portfolio-section {
    min-height: calc(100svh - var(--header-height));
    padding: clamp(54px, 7vh, 84px) 4.5vw;
    display: grid;
    align-items: center;
    background: var(--color-surface);
    scroll-margin-top: var(--header-height);
  }

  .portfolio-section.alternate {
    background: var(--color-background);
  }

  .section-inner {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  h2 {
    margin: 0 0 clamp(22px, 3vh, 34px);
    font-size: clamp(36px, 3vw, 46px);
    font-weight: 560;
    letter-spacing: -0.025em;
  }

  .entry-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(12px, 1.4vw, 22px);
  }

  @media (min-width: 901px) {
    h2 {
      font-size: clamp(42px, 3.4vw, 52px);
    }
  }

  @media (max-width: 900px) {
    .entry-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 720px) {
    .portfolio-section {
      padding-top: 70px;
      padding-bottom: 70px;
    }

    .entry-list {
      grid-template-columns: 1fr;
      gap: 7px;
    }
  }
</style>
