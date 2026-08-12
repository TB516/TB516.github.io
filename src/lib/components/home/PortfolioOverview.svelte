<script lang="ts">
  import { resume } from "$lib/resume";

  import PortfolioSection from "./PortfolioSection.svelte";
</script>

<PortfolioSection id="experience" title="Experience" entries={resume.work} kind="experience" />
<PortfolioSection
  id="projects"
  title="Projects"
  entries={resume.projects}
  kind="project"
  alternate
/>
