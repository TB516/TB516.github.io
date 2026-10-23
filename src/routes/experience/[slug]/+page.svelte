<script lang="ts">
  import EntryDetailShell from "$lib/components/detail/EntryDetailShell.svelte";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { basics } from "$lib/resume/basics";
  import { formatResumePeriod } from "$lib/resume/dates";

  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const experience = $derived(data.experience);
  const latestRoles = $derived(experience.positions[0].roles.join(", "));
  // Each position gets its own card with its title, dates, and highlights.
  const sections = $derived(
    experience.positions.map((position) => ({
      title: position.roles.join(", "),
      meta: formatResumePeriod(position.period),
      bullets: position.highlights,
    })),
  );
</script>

<PageMeta
  title={`${latestRoles} at ${experience.name} – ${basics.name}`}
  description={experience.summary}
/>

<EntryDetailShell
  title={experience.name}
  meta={experience.location ? [experience.location] : []}
  summary={experience.summary}
  {sections}
  stacked
  skillsHeading="Skills used"
  keywords={experience.keywords}
  backHref="/experience"
  backLabel="experience"
/>
