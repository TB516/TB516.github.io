<script lang="ts">
  import Background from "$lib/components/home/Background.svelte";
  import Hero from "$lib/components/home/Hero.svelte";
  import PortfolioOverview from "$lib/components/home/PortfolioOverview.svelte";
  import SkillsSection from "$lib/components/home/SkillsSection.svelte";
  import { resume } from "$lib/resume";
</script>

<svelte:head>
  <title>{resume.basics.name} – {resume.basics.label}</title>
  <meta name="description" content={resume.basics.description} />
</svelte:head>

<main class="portfolio-layout container" id="main-content" tabindex="-1">
  <Hero />
  <div class="portfolio-content">
    <PortfolioOverview />
    <SkillsSection />
    <Background />
  </div>
</main>

<style>
  .portfolio-layout {
    display: grid;
    grid-template-columns: clamp(320px, 25vw, 500px) minmax(0, 1fr);
    align-items: start;
    gap: clamp(32px, 4vw, 72px);
    padding-block: clamp(24px, 5vh, 64px) 24px;
  }
  .portfolio-content {
    min-width: 0;
  }
  .portfolio-content :global(.container) {
    width: 100%;
    margin: 0;
  }
  .portfolio-content :global(.summary) {
    font-size: var(--font-size-body);
    max-width: 65ch;
  }
  .portfolio-content :global(.section-heading) {
    font-size: clamp(20px, 1.4vw, 28px);
  }
  .portfolio-content :global(.project h3) {
    font-size: clamp(24px, 1.8vw, 36px);
  }
  .portfolio-content :global(.project) {
    padding: clamp(20px, 2vw, 40px);
  }
  .portfolio-content :global(.resume-section) {
    padding-bottom: clamp(24px, 3vh, 40px);
    gap: 18px;
  }
  @media (max-width: 1000px) {
    .portfolio-layout {
      grid-template-columns: 1fr;
      gap: 28px;
      padding-top: 24px;
    }
  }
</style>
