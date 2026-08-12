<script lang="ts">
  import EntryKeywords from "$lib/components/resume/EntryKeywords.svelte";
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
  const backLabel = $derived(kind === "Project" ? "projects" : "experience");
  const links = $derived(entry.links ?? []);
  const keywords = $derived(entry.keywords ?? []);
  const hasLinks = $derived(links.length > 0);
  const hasKeywords = $derived(keywords.length > 0);
</script>

{#snippet entryLinks(headingId: string)}
  <h2 id={headingId}>Links</h2>
  <div class="entry-links">
    {#each links as link}
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${link.label} for ${entry.name}, opens in a new tab`}
      >
        {link.label}<span class="link-arrow" aria-hidden="true">↗</span>
      </a>
    {/each}
  </div>
{/snippet}

<main>
  <section class="entry-intro" aria-labelledby="entry-title">
    <div class="entry-inner">
      <a class="back-link" href={backHref}>
        <span aria-hidden="true">←</span>Back to {backLabel}
      </a>

      <div class="intro-grid">
        <header class="entry-header">
          <p class="entry-kind">{kind}</p>
          <h1 id="entry-title">{entry.name}</h1>
          <p class="role">{role}</p>
          <div class="entry-meta">
            <time>{period}</time>
            {#if entry.location}<span>{entry.location}</span>{/if}
          </div>
        </header>

        <div class="intro-aside">
          <section class="overview" aria-labelledby="overview-heading">
            <h2 id="overview-heading">Overview</h2>
            <p>{entry.summary}</p>
          </section>

          {#if hasLinks}
            <section class="desktop-entry-links" aria-labelledby="desktop-links-heading">
              {@render entryLinks("desktop-links-heading")}
            </section>
          {/if}
        </div>
      </div>

      {#if hasLinks}
        <section class="mobile-entry-links" aria-labelledby="mobile-links-heading">
          {@render entryLinks("mobile-links-heading")}
        </section>
      {/if}
    </div>
  </section>

  <section class="entry-details" aria-labelledby="highlights-heading">
    <div class="details-inner">
      <div class="details-heading">
        <p>{kind} details</p>
        <h2 id="highlights-heading">Highlights</h2>
      </div>

      <ul class="highlight-grid">
        {#each entry.highlights as highlight}
          <li>{highlight}</li>
        {/each}
      </ul>

      {#if hasKeywords}
        <div class="entry-extras">
          <section id="entry-technologies" aria-labelledby="technologies-heading">
            <h2 id="technologies-heading">Skills, tools & technology</h2>
            <EntryKeywords {keywords} />
          </section>
        </div>
      {/if}
    </div>
  </section>
</main>

<style>
  .entry-intro,
  .entry-details {
    min-height: calc(100svh - var(--header-height));
    padding: clamp(48px, 7vh, 82px) 4.5vw;
    display: grid;
    align-items: center;
  }

  .entry-intro {
    background: var(--color-surface);
  }

  .entry-details {
    background: var(--color-background);
  }

  .entry-inner,
  .details-inner {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  .back-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--color-text-muted);
    font-size: 15px;
  }

  .back-link span,
  .entry-kind,
  .details-heading p {
    color: var(--color-accent);
  }

  .intro-grid {
    margin-top: clamp(56px, 9vh, 104px);
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.85fr);
    gap: clamp(48px, 7vw, 124px);
    align-items: end;
  }

  .entry-header {
    min-width: 0;
  }

  .entry-kind,
  .details-heading p,
  .overview h2,
  .entry-extras h2,
  .desktop-entry-links h2,
  .mobile-entry-links h2 {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h1 {
    margin: 18px 0 0;
    overflow-wrap: anywhere;
    font-size: clamp(48px, 6.5vw, 94px);
    font-weight: 650;
    line-height: 0.94;
    letter-spacing: -0.055em;
  }

  .role {
    margin: 24px 0 0;
    color: var(--color-text);
    font-size: clamp(23px, 2.2vw, 34px);
    font-weight: 520;
    line-height: 1.2;
  }

  .entry-meta {
    margin-top: 28px;
    display: flex;
    align-items: flex-start;
    gap: 12px 28px;
    flex-wrap: wrap;
    color: var(--color-text-dim);
    font-size: 15px;
  }

  .overview {
    padding: clamp(28px, 3vw, 44px);
    background: var(--color-raised);
  }

  .intro-aside {
    display: grid;
    gap: 22px;
  }

  .desktop-entry-links {
    padding: clamp(24px, 2.4vw, 36px);
    background: var(--color-raised);
  }

  .overview h2,
  .entry-extras h2,
  .desktop-entry-links h2,
  .mobile-entry-links h2 {
    color: var(--color-accent);
  }

  .mobile-entry-links {
    display: none;
  }

  .overview p {
    margin: 18px 0 0;
    color: var(--color-text-muted);
    font-size: clamp(19px, 1.8vw, 26px);
    line-height: 1.55;
  }

  .details-heading h2 {
    margin: 10px 0 0;
    font-size: clamp(38px, 4vw, 58px);
    font-weight: 580;
    line-height: 1;
    letter-spacing: -0.035em;
  }

  .highlight-grid {
    margin: clamp(30px, 4vh, 48px) 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(12px, 1.4vw, 22px);
    list-style: none;
  }

  .highlight-grid li {
    min-height: clamp(220px, 24vh, 300px);
    padding: clamp(24px, 2.4vw, 38px);
    display: flex;
    align-items: flex-start;
    color: var(--color-text-muted);
    background: var(--color-raised);
    font-size: clamp(18px, 1.35vw, 22px);
    line-height: 1.55;
  }

  .entry-extras {
    margin-top: clamp(34px, 5vh, 60px);
    display: grid;
    gap: 22px;
  }

  .entry-extras > section {
    padding: clamp(24px, 2.4vw, 36px);
    background: var(--color-surface);
    scroll-margin-top: calc(var(--header-height) + 24px);
  }

  .entry-links {
    margin: 20px 0 0;
    display: flex;
    gap: 10px 20px;
    flex-wrap: wrap;
  }

  .entry-links a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    color: var(--color-text-muted);
  }

  @media (max-width: 1100px) {
    .intro-grid {
      grid-template-columns: minmax(0, 1fr) minmax(320px, 0.8fr);
      gap: 42px;
    }

    .highlight-grid li {
      min-height: 0;
    }
  }

  @media (max-width: 900px) {
    .entry-intro,
    .entry-details {
      min-height: auto;
      align-items: start;
    }

    .intro-grid {
      grid-template-columns: 1fr;
    }

    .overview {
      max-width: 720px;
      margin-left: auto;
    }

    .highlight-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 720px) {
    .entry-intro,
    .entry-details {
      padding-top: 52px;
      padding-bottom: 64px;
    }

    .intro-grid {
      margin-top: 58px;
      gap: 48px;
    }

    h1 {
      font-size: clamp(44px, 14vw, 66px);
    }

    .role {
      margin-top: 20px;
    }

    .entry-meta {
      margin-top: 24px;
      display: grid;
      gap: 8px;
    }

    .overview {
      padding: 25px 23px;
    }

    .details-heading h2 {
      font-size: 40px;
    }

    .highlight-grid {
      gap: 7px;
    }

    .highlight-grid li {
      padding: 23px;
      font-size: 18px;
    }

    .mobile-entry-links {
      margin-top: 7px;
      padding: 25px 23px;
      display: block;
      background: var(--color-raised);
    }

    .desktop-entry-links {
      display: none;
    }

    .entry-extras {
      gap: 7px;
    }
  }
</style>
