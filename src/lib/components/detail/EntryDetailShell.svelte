<script lang="ts">
  import { formatResumePeriod } from "$lib/resume/dates";
  import type { ResumeEntry } from "$lib/resume/schema";

  let {
    kind,
    entry,
    backHref,
  }: {
    kind: "Experience" | "Project";
    entry: ResumeEntry;
    backHref: string;
  } = $props();

  const role = $derived(entry.roles.join(", "));
  const period = $derived(formatResumePeriod(entry.period));
  const backLabel = $derived(
    entry.category === "contribution"
      ? "open-source contributions"
      : kind === "Project"
        ? "projects"
        : "experience",
  );
</script>

<main id="main-content" tabindex="-1" class="entry-page container">
  <a class="back-link link-back" href={backHref}>All {backLabel}</a>
  <div class="entry-layout">
    <header class="entry-header">
      <h1>{entry.name}</h1>
      <div class="entry-meta">
        <p class="role">{role}</p>
        <p>{period}</p>
        {#if entry.location}<p>{entry.location}</p>{/if}
      </div>
      <p class="entry-summary">{entry.summary}</p>
      {#if entry.links?.length}
        <nav class="entry-links" aria-label={`${entry.name} links`}>
          {#each entry.links as link}
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${link.label} for ${entry.name}, opens in a new tab`}>{link.label}</a
            >
          {/each}
        </nav>
      {/if}
    </header>
    {#if entry.sections?.length}
      <div class="entry-story">
        {#each entry.sections as section}
          <section class="story-section">
            <h2>{section.title}</h2>
            <div class="section-content">
              {#each section.paragraphs ?? [] as paragraph}<p>{paragraph}</p>{/each}
              {#if section.bullets?.length}
                <ul>
                  {#each section.bullets as bullet}<li>{bullet}</li>{/each}
                </ul>
              {/if}
              {#if section.links?.length}
                <nav class="source-links" aria-label={`${section.title} references`}>
                  {#each section.links as link}<a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${link.label}, opens in a new tab`}>{link.label}</a
                    >{/each}
                </nav>
              {/if}
            </div>
          </section>
        {/each}
      </div>
    {:else if entry.highlights.length}
      <section class="story-section" aria-labelledby="highlights-heading">
        <h2 id="highlights-heading">Highlights</h2>
        <ul>
          {#each entry.highlights as highlight}<li>{highlight}</li>{/each}
        </ul>
      </section>
    {/if}
    {#if entry.keywords?.length}
      <section class="entry-skills" aria-labelledby="skills-heading">
        <h2 id="skills-heading">
          {entry.category === "project" ? "Built with" : "Skills used"}
        </h2>
        <p>{entry.keywords.join(", ")}</p>
      </section>
    {/if}
  </div>
</main>

<style>
  .entry-page {
    padding-block: 16px 48px;
  }
  .back-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    color: var(--color-accent);
    font-size: var(--font-size-link);
  }
  .entry-header {
    min-width: 0;
  }
  h1 {
    margin: 0 0 12px;
    font-size: clamp(28px, 2.5vw, 48px);
    font-weight: 650;
    line-height: 1.15;
    letter-spacing: -0.04em;
    overflow-wrap: anywhere;
  }
  .role {
    margin: 0;
  }
  .entry-meta {
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 28px;
    color: var(--color-text-muted);
    font-size: var(--font-size-link);
  }
  .entry-meta p {
    margin: 0;
  }
  .entry-summary {
    max-width: 72ch;
    margin: 14px 0 0;
    font-size: var(--font-size-body);
    line-height: 1.6;
  }
  .entry-story {
    columns: 2;
    column-gap: 24px;
  }
  .entry-story .story-section {
    break-inside: avoid;
    margin-bottom: 24px;
  }
  .story-section {
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: clamp(24px, 2vw, 36px);
    background: var(--color-surface);
    border-radius: 10px;
  }
  @media (max-width: 850px) {
    .entry-story {
      columns: 1;
    }
  }
  .section-content {
    min-width: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .story-section h2 {
    margin: 0 0 20px;
    font-size: clamp(22px, 1.4vw, 27px);
    font-weight: 600;
  }
  .story-section p,
  li {
    color: var(--color-text-muted);
    font-size: clamp(18px, 1.1vw, 22px);
    line-height: 1.65;
  }
  .story-section p {
    margin: 0;
  }
  .story-section p + p,
  .story-section p + ul {
    margin-top: 14px;
  }
  ul {
    margin: 0;
    padding-left: 22px;
  }
  li + li {
    margin-top: 14px;
  }
  li::marker {
    color: var(--color-text-dim);
  }
  .source-links {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 16px;
  }
  .source-links a,
  .entry-links a {
    color: var(--color-accent);
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    font-size: var(--font-size-link);
  }
  .source-links a {
    align-items: start;
    padding-block: 8px;
    text-wrap: pretty;
  }
  .entry-links {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px 24px;
  }
  .entry-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
    align-items: start;
    padding-top: 24px;
  }
  .entry-skills {
    padding: 20px clamp(24px, 2vw, 36px);
    background: var(--color-surface);
    border-radius: 10px;
  }
  .entry-skills h2 {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
  }
  .entry-skills p {
    margin: 0;
    color: var(--color-text-muted);
    font-size: var(--font-size-link);
    line-height: 1.65;
  }
  @media (max-width: 1000px) {
    .entry-layout {
      padding-top: 28px;
    }
  }
  @media (max-width: 640px) {
    .entry-meta .role {
      flex-basis: 100%;
    }
    .entry-page {
      padding-top: 20px;
    }
  }
</style>
