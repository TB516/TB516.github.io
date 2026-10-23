<script lang="ts">
  import { formatResumePeriod } from "$lib/resume/dates";
  import {
    getExperiencePeriod,
    getExperienceSlug,
    getExperienceTitles,
  } from "$lib/resume/experience";
  import type { Experience } from "$lib/resume/schema";

  let { experiences }: { experiences: readonly Experience[] } = $props();
</script>

<ul>
  {#each experiences as experience}
    <li>
      <a href={`/experience/${getExperienceSlug(experience)}`}>
        <span class="employer link-forward">{experience.name}</span>
        {#each getExperienceTitles(experience) as title}<span class="job-role">{title}</span>{/each}
        <span class="job-date">{formatResumePeriod(getExperiencePeriod(experience))}</span>
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
    text-decoration: none;
  }
  /* Matches the cards: white names with an orange arrow, turning orange on hover or focus. */
  .employer {
    font-weight: 600;
    color: var(--color-text);
    transition: color 150ms ease;
  }
  .employer::after {
    color: var(--color-accent);
  }
  a:hover .employer,
  a:focus-visible .employer {
    color: var(--color-accent);
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
