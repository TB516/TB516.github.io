<script lang="ts">
  import { resume } from "$lib/resume";
  import { formatResumePeriod } from "$lib/resume/dates";
  import { getResumeEntrySlug } from "$lib/resume/slugs";
</script>

<div class="resume-section container">
  <details id="experience">
    <summary>Job history</summary>
    <ul>
      {#each resume.work as entry}
        <li>
          <a href={`/experience/${getResumeEntrySlug(entry)}`}>
            <span class="job-info">
              <span class="employer">{entry.name}</span>
              <span class="job-role">{entry.roles.join(", ")}</span>
              <span class="job-date">{formatResumePeriod(entry.period)}</span>
            </span>
            <span class="link-arrow" aria-hidden="true">→</span>
          </a>
        </li>
      {/each}
    </ul>
  </details>
</div>

<style>
  details {
    margin: 0;
  }
  summary {
    cursor: pointer;
    padding-block: 10px;
    color: var(--color-text);
    font-size: clamp(20px, 1.4vw, 28px);
    font-weight: 600;
  }
  summary::marker {
    color: var(--color-accent);
  }
  ul {
    margin: 8px 0 0;
    padding: 0;
    list-style: none;
  }
  li + li {
    margin-top: 8px;
  }
  a {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 16px;
    align-items: start;
    padding-block: 12px;
    font-size: var(--font-size-link);
  }
  .job-info {
    display: grid;
    gap: 2px;
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
  .link-arrow {
    margin: 0;
  }
</style>
