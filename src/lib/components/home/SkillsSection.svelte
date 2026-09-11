<script lang="ts">
  import { resume } from "$lib/resume";
</script>

<section class="resume-section container" id="skills" aria-labelledby="skills-heading">
  <h2 class="section-heading" id="skills-heading">Skills</h2>
  <dl class="skill-groups">
    {#each resume.skills as group}
      <div>
        <dt>{group.name}</dt>
        <dd>{group.keywords.join(", ")}</dd>
      </div>
    {/each}
  </dl>
</section>

<style>
  .skill-groups {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 28px;
  }

  .skill-groups > div {
    min-width: 0;
  }

  dt {
    margin-bottom: 8px;
    font-size: var(--font-size-link);
    font-weight: 600;
  }

  dd {
    max-width: 60ch;
    margin: 0;
    color: var(--color-text-muted);
    font-size: var(--font-size-link);
    line-height: 1.65;
  }

  @media (max-width: 640px) {
    .skill-groups {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }
</style>
