<script lang="ts">
  import { resume } from "$lib/resume";
  import { formatResumePeriod } from "$lib/resume/dates";
  import { getResumeEntrySlug } from "$lib/resume/slugs";

  import PortfolioSection from "./PortfolioSection.svelte";

  const experienceEntries = resume.work.map((job) => ({
    date: formatResumePeriod(job.period),
    primaryLabel: "Company",
    primaryTitle: job.name,
    primaryMeta: job.location,
    roleTitle: job.roles.join(", "),
    summary: job.summary,
    keywords: job.keywords,
    href: `/experience/${getResumeEntrySlug(job)}`,
  }));

  const projectEntries = resume.projects.map((project) => ({
    date: formatResumePeriod(project.period),
    primaryLabel: "Project",
    primaryTitle: project.name,
    roleTitle: project.roles.join(", "),
    summary: project.summary,
    keywords: project.keywords,
    links: project.links,
    href: `/projects/${getResumeEntrySlug(project)}`,
  }));
</script>

<PortfolioSection id="experience" title="Experience" entries={experienceEntries} />
<PortfolioSection id="projects" title="Projects" entries={projectEntries} alternate />
