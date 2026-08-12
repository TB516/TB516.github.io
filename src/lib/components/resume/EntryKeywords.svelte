<script lang="ts">
  let {
    keywords,
    compact = false,
    limit,
    moreHref,
  }: {
    keywords: string[];
    compact?: boolean;
    limit?: number;
    moreHref?: string;
  } = $props();

  const visibleKeywords = $derived(limit ? keywords.slice(0, limit) : keywords);
  const remainingCount = $derived(keywords.length - visibleKeywords.length);
</script>

<ul class:compact>
  {#each visibleKeywords as keyword}
    <li>{keyword}</li>
  {/each}
  {#if remainingCount > 0}
    <li class="remaining">
      {#if moreHref}
        <a
          href={moreHref}
          aria-label={`View ${remainingCount} more skills, tools, and technologies`}
        >
          +{remainingCount} more
        </a>
      {:else}
        +{remainingCount} more
      {/if}
    </li>
  {/if}
</ul>

<style>
  ul {
    margin: 20px 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 0;
    list-style: none;
  }

  li {
    color: var(--color-text-muted);
    font-size: 17px;
    line-height: 1.5;
  }

  li:not(:last-child)::after {
    margin: 0 10px;
    color: var(--color-accent);
    content: "·";
  }

  ul:not(.compact) li {
    font-size: clamp(17px, 1.3vw, 21px);
  }

  .compact {
    margin-top: 8px;
  }

  .compact li {
    color: var(--color-text-dim);
    font-size: 13px;
  }

  .compact .remaining {
    color: var(--color-text-muted);
  }

  .remaining a {
    color: inherit;
  }

  .compact li:not(:last-child)::after {
    margin: 0 7px;
  }

  @media (min-width: 901px) {
    .compact li {
      font-size: 14px;
    }
  }
</style>
