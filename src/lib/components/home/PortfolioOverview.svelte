<script lang="ts">
  import PortfolioSection from "$lib/components/PortfolioSection.svelte";
  import { heliumPackaging } from "$lib/resume/projects/helium-packaging";
  import { personalOS } from "$lib/resume/projects/personal-os";
  import { r2modman } from "$lib/resume/projects/r2modman";
  import { t3CodeFlatpak } from "$lib/resume/projects/t3-code-flatpak";

  const featuredWork = [r2modman, personalOS, t3CodeFlatpak, heliumPackaging];
</script>

<div class="featured-work">
  <PortfolioSection id="projects" title="Featured work" entries={featuredWork} />
  <a class="browse-link link-forward" href="/projects">Browse all projects and contributions</a>
</div>

<style>
  .featured-work {
    margin-bottom: 28px;
  }
</style>
