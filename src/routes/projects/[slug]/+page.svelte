<script lang="ts">
  import EntryDetailShell from "$lib/components/detail/EntryDetailShell.svelte";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { basics } from "$lib/resume/basics";
  import { formatResumePeriod } from "$lib/resume/dates";

  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const project = $derived(data.entry);
  const isContribution = $derived(project.category === "contribution");
  const meta = $derived([project.roles.join(", "), formatResumePeriod(project.period)]);
  // Projects without write-up sections show their résumé highlights as a single card.
  const sections = $derived(
    project.sections ??
      (project.highlights.length ? [{ title: "Highlights", bullets: project.highlights }] : []),
  );
</script>

<PageMeta title={`${project.name} – ${basics.name}`} description={project.summary} />

<EntryDetailShell
  title={project.name}
  {meta}
  summary={project.summary}
  links={project.links}
  {sections}
  stacked={!project.sections}
  skillsHeading={project.category === "project" ? "Built with" : "Skills used"}
  keywords={project.keywords}
  backHref={isContribution ? "/projects?category=contribution" : "/projects?category=project"}
  backLabel={isContribution ? "open-source contributions" : "projects"}
/>
