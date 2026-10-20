<script lang="ts">
  import PortfolioSection from "$lib/components/home/PortfolioSection.svelte";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { basics } from "$lib/resume/basics";
  import { work } from "$lib/resume/work";
</script>

<PageMeta
  title={`Experience – ${basics.name}`}
  description={`Work experience of ${basics.name}.`}
/>

<main class="browse-page container" id="main-content" tabindex="-1">
  <a class="back-link link-back" href="/">Back to home</a>
  <h1>Experience</h1>
  <PortfolioSection id="work" title="Experience" entries={work} kind="Experience" hideHeading />
</main>

<style>
  .browse-page {
    padding-block: 16px 48px;
  }
  h1 {
    margin: 24px 0 28px;
    font-size: clamp(28px, 2.5vw, 48px);
    line-height: 1.15;
    letter-spacing: -0.04em;
  }
  .browse-page :global(.resume-section.container) {
    width: 100%;
    margin-inline: 0;
  }
</style>
