<script lang="ts">
  let {
    kind,
    title,
    role,
    period,
    location,
    summary,
    backHref,
  }: {
    kind: "Experience" | "Project";
    title: string;
    role: string;
    period: string;
    location?: string;
    summary: string;
    backHref: string;
  } = $props();
</script>

<main class="detail-page">
  <div class="detail-inner">
    <a class="back-link" href={backHref}>
      <span aria-hidden="true">←</span>Back to {kind.toLowerCase()}
    </a>

    <header class="entry-header">
      <p class="entry-kind">{kind}</p>
      <h1>{title}</h1>
      <p class="role">{role}</p>
      <div class="entry-meta">
        <time>{period}</time>
        {#if location}<span>{location}</span>{/if}
      </div>
    </header>

    <section class="overview" aria-labelledby="overview-heading">
      <h2 id="overview-heading">Overview</h2>
      <p>{summary}</p>
    </section>
  </div>
</main>

<style>
  .detail-page {
    min-height: calc(100svh - var(--header-height));
    padding: clamp(48px, 7vh, 82px) 4.5vw;
    display: grid;
    align-items: center;
    background: var(--color-surface);
  }

  .detail-inner {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--color-text-muted);
    font-size: 15px;
  }

  .back-link span,
  .entry-kind {
    color: var(--color-accent);
  }

  .entry-header {
    max-width: 1100px;
    margin-top: clamp(56px, 9vh, 104px);
  }

  .entry-kind {
    margin: 0;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h1 {
    margin: 18px 0 0;
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

  time {
    white-space: pre-line;
  }

  .overview {
    max-width: 1000px;
    margin: clamp(56px, 9vh, 104px) 0 0 auto;
    padding: clamp(28px, 3vw, 44px);
    background: var(--color-raised);
  }

  h2 {
    margin: 0;
    color: var(--color-accent);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .overview p {
    margin: 18px 0 0;
    color: var(--color-text-muted);
    font-size: clamp(19px, 1.8vw, 26px);
    line-height: 1.55;
  }

  @media (max-width: 720px) {
    .detail-page {
      padding-top: 44px;
      padding-bottom: 56px;
      align-items: start;
    }

    .entry-header {
      margin-top: 58px;
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
      margin-top: 58px;
      padding: 25px 23px;
    }
  }
</style>
