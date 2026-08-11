<script lang="ts">
  import Hero from "$lib/components/home/Hero.svelte";
  import PortfolioOverview from "$lib/components/home/PortfolioOverview.svelte";
  import SiteHeader from "$lib/components/home/SiteHeader.svelte";
  import SkillsSection from "$lib/components/home/SkillsSection.svelte";
  import { resume } from "$lib/resume";
</script>

<svelte:head>
  <title>{resume.basics.name} — {resume.basics.label}</title>
  <meta name="description" content={resume.basics.description} />
</svelte:head>

<div id="top" aria-hidden="true"></div>
<SiteHeader />
<main>
  <Hero />
  <PortfolioOverview />
  <SkillsSection />
</main>
