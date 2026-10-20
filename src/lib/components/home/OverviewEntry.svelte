<script lang="ts">
  import { formatResumePeriod } from "$lib/resume/dates";
  import type { ResumeEntry } from "$lib/resume/schema";
  import { getResumeEntrySlug } from "$lib/resume/slugs";

  let { entry, kind }: { entry: ResumeEntry; kind: "Experience" | "Project" } = $props();

  const roleTitle = $derived(entry.roles.join(", "));
  // Dates tell repeated employers apart, such as several seasons at the same company.
  const meta = $derived(
    kind === "Experience" ? `${roleTitle} · ${formatResumePeriod(entry.period)}` : roleTitle,
  );
  const basePath = $derived(kind === "Experience" ? "/experience" : "/projects");
  const href = $derived(`${basePath}/${getResumeEntrySlug(entry)}`);
</script>

<a class="project" {href} aria-label={`Read about ${entry.name}, ${meta}`}>
  <div class="project-content">
    <h3>
      <span class="details-link link-forward">{entry.name}</span>
    </h3>
    <p class="project-meta">{meta}</p>
    <p class="summary">{entry.summary}</p>
  </div>
</a>

<style>
  h3 {
    margin: 0;
    font-weight: 550;
    line-height: 1.45;
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
  }
  .project {
    background: var(--color-surface);
    border-radius: 8px;
    padding: 20px 24px;
    text-decoration: none;
    transition: background 150ms ease;
    display: flex;
  }
  .project:hover {
    background: var(--color-raised);
  }
  .project-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .project h3 {
    font-size: clamp(22px, 1.7vw, 28px);
  }
  .details-link {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: baseline;
  }

  .project-meta {
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
    .project {
      padding: 20px;
    }
  }
</style>
