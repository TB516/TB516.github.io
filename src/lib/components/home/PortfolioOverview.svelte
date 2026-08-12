<script lang="ts">
  import { resume } from "$lib/resume";
  import { formatResumePeriods } from "$lib/resume/dates";

  import PortfolioSection from "./PortfolioSection.svelte";

  const experienceEntries = resume.work.map((job) => ({
    date: formatResumePeriods(job.periods, "\n"),
    primaryLabel: "Company",
    primaryTitle: job.name,
    primaryMeta: job.location,
    roleTitle: job.roles.join(", "),
    summary: job.summary,
  }));

  const projectEntries = resume.projects.map((project) => ({
    date: formatResumePeriods(project.periods, "\n"),
    primaryLabel: "Project",
    primaryTitle: project.name,
    roleTitle: project.roles.join(", "),
    summary: project.summary,
  }));
</script>

<PortfolioSection id="experience" title="Experience" entries={experienceEntries} />
<PortfolioSection id="projects" title="Projects" entries={projectEntries} alternate />
