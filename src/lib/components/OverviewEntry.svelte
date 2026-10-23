<script lang="ts">
  import type { CardContent } from "./cards";

  let { title, meta, summary, href }: CardContent = $props();
</script>

<a class="card" {href} aria-label={`Read about ${title}, ${meta.join(", ")}`}>
  <div class="card-content">
    <h3>
      <span class="card-title link-forward">{title}</span>
    </h3>
    <p class="card-meta">
      {#each meta as line}<span>{line}</span>{/each}
    </p>
    <p class="summary">{summary}</p>
  </div>
</a>

<style>
  .card {
    background: var(--color-surface);
    border-radius: 8px;
    padding: 20px 24px;
    text-decoration: none;
    transition: background 150ms ease;
    display: flex;
  }
  .card:hover {
    background: var(--color-raised);
  }
  .card-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .card h3 {
    margin: 0;
    font-size: clamp(22px, 1.7vw, 28px);
    font-weight: 550;
    line-height: 1.45;
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
    color: var(--color-text);
    transition: color 150ms ease;
  }
  .card:hover h3,
  .card:focus-visible h3 {
    color: var(--color-accent);
  }
  .card-title {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: baseline;
  }
  .card-title::after {
    color: var(--color-accent);
  }
  .card-meta span {
    display: block;
  }
  .card-meta {
    margin: 4px 0 12px;
    color: var(--color-text-muted);
    font-size: 15px;
  }
  .summary {
    max-width: 72ch;
    margin: 0;
    color: var(--color-text-muted);
    font-size: 18px;
    line-height: 1.6;
  }
  @media (max-width: 640px) {
    .card {
      padding: 20px;
    }
  }
</style>
