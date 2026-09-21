<script lang="ts">
  import { personalOS } from "$lib/resume/projects/personal-os";
  import { r2modman } from "$lib/resume/projects/r2modman";
  import { sveltekitPdfRenderer } from "$lib/resume/projects/sveltekit-pdf-renderer";
  import { t3CodeFlatpak } from "$lib/resume/projects/t3-code-flatpak";

  import PortfolioSection from "./PortfolioSection.svelte";

  const featuredWork = [r2modman, personalOS, t3CodeFlatpak, sveltekitPdfRenderer];
</script>

<div class="featured-work">
  <PortfolioSection id="projects" title="Featured work" entries={featuredWork} />
  <a class="browse-link" href="/projects"
    >Browse all projects and contributions<span aria-hidden="true">→</span></a
  >
</div>

<style>
  .featured-work {
    margin-bottom: 28px;
  }
  .browse-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-height: 44px;
    font-size: var(--font-size-link);
  }
</style>
