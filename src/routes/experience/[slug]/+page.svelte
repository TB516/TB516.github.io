<script lang="ts">
  import EntryDetailShell from "$lib/components/detail/EntryDetailShell.svelte";
  import { resume } from "$lib/resume";

  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.entry.roles.join(", ")} at {data.entry.name} – {resume.basics.name}</title>
  <meta name="description" content={data.entry.summary} />
</svelte:head>

<EntryDetailShell kind="Experience" entry={data.entry} backHref="/#experience" />
