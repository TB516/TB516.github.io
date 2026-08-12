<script lang="ts">
  import EntryDetailShell from "$lib/components/detail/EntryDetailShell.svelte";
  import { resume } from "$lib/resume";
  import { formatResumePeriod } from "$lib/resume/dates";

  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.entry.name} – {resume.basics.name}</title>
  <meta name="description" content={data.entry.summary} />
</svelte:head>

<EntryDetailShell
  kind="Project"
  title={data.entry.name}
  role={data.entry.roles.join(", ")}
  period={formatResumePeriod(data.entry.period)}
  summary={data.entry.summary}
  backHref="/#projects"
/>
