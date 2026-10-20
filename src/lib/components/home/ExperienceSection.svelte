<script lang="ts">
  import { work } from "$lib/resume/work";

  import ExperienceList from "./ExperienceList.svelte";
</script>

<section class="resume-section container" id="experience" aria-labelledby="experience-heading">
  <h2 class="section-heading" id="experience-heading">Experience</h2>
  <ExperienceList entries={work.slice(0, 4)} />
  <a class="browse-link link-forward" href="/experience">Browse all experience</a>
</section>

<style>
  .browse-link {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-size: var(--font-size-link);
  }
</style>
