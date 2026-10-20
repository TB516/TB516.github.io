<script lang="ts">
  import { formatResumePeriod } from "$lib/resume/dates";
  import type { ResumeEntry, ResumeEntryKind } from "$lib/resume/schema";
  import { getResumeEntrySlug } from "$lib/resume/slugs";

  let { entry, kind }: { entry: ResumeEntry; kind: ResumeEntryKind } = $props();

  const roleTitle = $derived(entry.roles.join(", "));
  const period = $derived(formatResumePeriod(entry.period));
  // Dates tell repeated employers apart, such as several seasons at the same company.
  const meta = $derived(kind === "Experience" ? `${roleTitle} · ${period}` : roleTitle);
  const basePath = $derived(kind === "Experience" ? "/experience" : "/projects");
  const href = $derived(`${basePath}/${getResumeEntrySlug(entry)}`);
</script>

<a class="card" {href} aria-label={`Read about ${entry.name}, ${meta}`}>
  <div class="card-content">
    <h3>
      <span class="card-title link-forward">{entry.name}</span>
    </h3>
    <p class="card-meta">
      {roleTitle}
      {#if kind === "Experience"}<span class="period">{period}</span>{/if}
    </p>
    <p class="summary">{entry.summary}</p>
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
  .period {
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
