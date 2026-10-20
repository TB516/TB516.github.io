<script lang="ts">
  import { formatResumePeriod } from "$lib/resume/dates";
  import type { ResumeEntry } from "$lib/resume/schema";
  import { getResumeEntrySlug } from "$lib/resume/slugs";

  let { entries }: { entries: readonly ResumeEntry[] } = $props();
</script>

<ul>
  {#each entries as entry}
    <li>
      <a href={`/experience/${getResumeEntrySlug(entry)}`}>
        <span class="employer"
          >{entry.name}<span class="link-arrow" aria-hidden="true">→</span></span
        >
        <span class="job-role">{entry.roles.join(", ")}</span>
        <span class="job-date">{formatResumePeriod(entry.period)}</span>
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 28px;
  }
  a {
    display: grid;
    gap: 2px;
    padding-block: 12px;
    font-size: var(--font-size-link);
  }
  .employer {
    font-weight: 600;
  }
  .job-role,
  .job-date {
    color: var(--color-text-muted);
  }
  .job-date {
    font-size: 15px;
  }
  @media (max-width: 640px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
</style>
