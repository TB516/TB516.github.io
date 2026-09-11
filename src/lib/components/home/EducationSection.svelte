<script lang="ts">
  import { resume } from "$lib/resume";
  import { formatResumePeriod } from "$lib/resume/dates";
  import { formatEducationDetails } from "$lib/resume/education";
</script>

<section class="education" id="education" aria-labelledby="education-heading">
  <h2 class="section-heading" id="education-heading">Education</h2>
  {#each resume.education as education}
    <article>
      <div class="education-heading">
        <h3>{education.institution}</h3>
        <p class="period">{formatResumePeriod(education.period)}</p>
      </div>
      <p>{education.studyType} in {education.area}</p>
      {#if formatEducationDetails(education)}
        <p class="details">{formatEducationDetails(education)}</p>
      {/if}
    </article>
  {/each}
</section>

<style>
  .education {
    margin-top: 28px;
  }
  .section-heading {
    margin-bottom: 14px;
  }
  article + article {
    margin-top: 20px;
  }
  .education-heading {
    display: grid;
    gap: 4px;
  }
  h3 {
    margin: 0;
    font-size: var(--font-size-link);
    font-weight: 600;
  }
  p {
    margin: 4px 0 0;
    font-size: var(--font-size-link);
    color: var(--color-text-muted);
  }
  .period {
    margin: 0;
  }
</style>
