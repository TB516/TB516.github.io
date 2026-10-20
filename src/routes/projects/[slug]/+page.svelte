<script lang="ts">
  import EntryDetailShell from "$lib/components/detail/EntryDetailShell.svelte";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { basics } from "$lib/resume/basics";

  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<PageMeta title={`${data.entry.name} – ${basics.name}`} description={data.entry.summary} />

<EntryDetailShell
  kind="Project"
  entry={data.entry}
  backHref={data.entry.category === "contribution"
    ? "/projects?category=contribution"
    : "/projects?category=project"}
/>
