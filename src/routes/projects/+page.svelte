<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import PortfolioSection from "$lib/components/home/PortfolioSection.svelte";
  import { basics } from "$lib/resume/basics";
  import { projects } from "$lib/resume/projects";

  const filters = [
    { label: "All", value: "all", href: "/projects" },
    { label: "Projects", value: "project", href: "/projects?category=project" },
    { label: "Contributions", value: "contribution", href: "/projects?category=contribution" },
  ] as const;
  // Static HTML contains the full collection; URL filters apply in the browser.
  const category = $derived(browser ? page.url.searchParams.get("category") : null);
  const activeFilter = $derived(filters.find((filter) => filter.value === category) ?? filters[0]);
  const entries = $derived(
    projects.filter(
      (entry) => activeFilter.value === "all" || entry.category === activeFilter.value,
    ),
  );
</script>

<svelte:head>
  <title>Projects and contributions – {basics.name}</title>
  <meta
    name="description"
    content="Web applications, Linux projects, and open-source contributions by Thomas Berrios."
  />
</svelte:head>

<main class="browse-page container" id="main-content" tabindex="-1">
  <a class="back-link" href="/">← Back to home</a>
  <h1>Projects and contributions</h1>
  <nav class="filters" aria-label="Filter work">
    {#each filters as filter}
      <a href={filter.href} aria-current={filter === activeFilter ? "page" : undefined}>
        {filter.label}
      </a>
    {/each}
  </nav>
  <PortfolioSection
    id="work"
    title={activeFilter.value === "all" ? "All work" : activeFilter.label}
    {entries}
    hideHeading
  />
</main>

<style>
  .browse-page {
    padding-block: 16px 48px;
  }
  .back-link {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-size: var(--font-size-link);
  }
  h1 {
    margin: 24px 0 12px;
    font-size: clamp(28px, 2.5vw, 48px);
    line-height: 1.15;
    letter-spacing: -0.04em;
  }
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-block: 28px;
  }
  .filters a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 8px 18px;
    border-radius: 8px;
    background: var(--color-surface);
    color: var(--color-text-muted);
  }
  .filters a[aria-current="page"] {
    background: var(--color-raised);
    color: var(--color-accent);
  }
  .browse-page :global(.resume-section.container) {
    width: 100%;
    margin-inline: 0;
  }
</style>
