<script lang="ts">
  import { resume } from "$lib/resume";

  import PortfolioSection from "./PortfolioSection.svelte";
</script>

<PortfolioSection
  id="contributions"
  title="Open-source contributions"
  entries={resume.projects.filter((entry) => entry.category === "contribution")}
/>
<PortfolioSection
  id="projects"
  title="Projects"
  entries={resume.projects.filter((entry) => entry.category !== "contribution")}
/>
