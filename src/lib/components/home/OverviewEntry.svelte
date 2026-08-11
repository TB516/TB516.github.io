<script lang="ts">
  let {
    date,
    primaryLabel,
    primaryTitle,
    primaryMeta,
    roleTitle,
    summary,
  }: {
    date: string;
    primaryLabel: string;
    primaryTitle: string;
    primaryMeta?: string;
    roleTitle: string;
    summary: string;
  } = $props();
</script>

<article>
  <time>{date}</time>
  <div>
    <span>{primaryLabel}</span>
    <h3>{primaryTitle}</h3>
    {#if primaryMeta}<p>{primaryMeta}</p>{/if}
  </div>
  <div>
    <span>Role</span>
    <p class="entry-title">{roleTitle}</p>
  </div>
  <p class="summary">{summary}</p>
</article>

<style>
  article {
    min-height: 290px;
    padding: clamp(22px, 2vw, 30px);
    display: grid;
    grid-template-rows: auto auto auto 1fr;
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

  span {
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

  @media (min-width: 901px) {
    time {
      font-size: 14px;
    }

    span {
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
  }

  @media (max-width: 720px) {
    article {
      min-height: 0;
      padding: 21px 23px;
      gap: 26px;
    }
  }
</style>
