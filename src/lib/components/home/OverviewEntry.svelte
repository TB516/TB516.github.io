<script lang="ts">
  import EntryKeywords from "$lib/components/resume/EntryKeywords.svelte";
  import type { Link } from "$lib/resume/schema";

  let {
    date,
    primaryLabel,
    primaryTitle,
    primaryMeta,
    roleTitle,
    summary,
    keywords,
    links,
    href,
  }: {
    date: string;
    primaryLabel: string;
    primaryTitle: string;
    primaryMeta?: string;
    roleTitle: string;
    summary: string;
    keywords?: string[];
    links?: Link[];
    href: string;
  } = $props();
</script>

<article>
  <time>{date}</time>
  <div>
    <span class="label">{primaryLabel}</span>
    <h3>{primaryTitle}</h3>
    {#if primaryMeta}<p>{primaryMeta}</p>{/if}
  </div>
  <div>
    <span class="label">Role</span>
    <p class="entry-title">{roleTitle}</p>
  </div>
  <p class="summary">{summary}</p>
  {#if keywords?.length}
    <div class="entry-keywords">
      <span class="label">Skills & technology</span>
      <EntryKeywords {keywords} compact limit={3} moreHref={`${href}#entry-technologies`} />
    </div>
  {/if}
  <div class="entry-actions">
    <a class="entry-link" {href} aria-label={`View details for ${primaryTitle}`}>
      View details<span class="link-arrow" aria-hidden="true">→</span>
    </a>
    {#if links?.length}
      <div class="external-links">
        {#each links as link}
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${link.label} for ${primaryTitle}`}
          >
            {link.label}<span class="link-arrow" aria-hidden="true">↗</span>
          </a>
        {/each}
      </div>
    {/if}
  </div>
</article>

<style>
  article {
    min-height: 290px;
    padding: clamp(22px, 2vw, 30px);
    display: grid;
    grid-template-rows: auto auto auto 1fr auto auto;
    gap: 22px;
    align-items: start;
    background: var(--color-raised);
  }

  time {
    color: var(--color-text-dim);
    font:
      13px/1.45 ui-monospace,
      SFMono-Regular,
      Menlo,
      monospace;
    white-space: pre-line;
  }

  .label {
    color: var(--color-accent);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  h3,
  .entry-title {
    margin: 5px 0 0;
    color: var(--color-text);
    font-size: clamp(21px, 1.65vw, 25px);
    font-weight: 570;
    line-height: 1.18;
  }

  div > p {
    margin: 4px 0 0;
    color: var(--color-text-muted);
    font-size: 13px;
  }

  .summary {
    margin: 0;
    color: var(--color-text-muted);
    font-size: 17px;
    line-height: 1.55;
  }

  .entry-keywords {
    align-self: end;
  }

  .entry-actions {
    min-width: 0;
    display: flex;
    align-items: center;
    align-self: end;
    gap: 8px 22px;
    flex-wrap: wrap;
  }

  .entry-actions a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
  }

  .entry-link {
    color: var(--color-text);
  }

  .external-links {
    display: flex;
    gap: 8px 18px;
    flex-wrap: wrap;
  }

  .external-links a {
    color: var(--color-text);
  }

  @media (min-width: 901px) {
    time {
      font-size: 14px;
    }

    .label {
      font-size: 12px;
    }

    h3,
    .entry-title {
      font-size: clamp(23px, 1.8vw, 28px);
    }

    div > p {
      font-size: 14px;
    }

    .summary {
      font-size: 18px;
    }

    .entry-actions a {
      font-size: 16px;
    }
  }

  @media (max-width: 720px) {
    article {
      min-height: 0;
      padding: 21px 23px;
      gap: 26px;
    }
  }
</style>
