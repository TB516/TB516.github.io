<script lang="ts">
  import { projects } from "$lib/resume/projects";

  import PortfolioSection from "./PortfolioSection.svelte";
</script>

<PortfolioSection
  id="contributions"
  title="Open-source contributions"
  entries={projects.filter((entry) => entry.category === "contribution")}
/>
<PortfolioSection
  id="projects"
  title="Projects"
  entries={projects.filter((entry) => entry.category !== "contribution")}
/>
