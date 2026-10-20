<script lang="ts">
  import EntryDetailShell from "$lib/components/detail/EntryDetailShell.svelte";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { basics } from "$lib/resume/basics";

  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<PageMeta
  title={`${data.entry.roles.join(", ")} at ${data.entry.name} – ${basics.name}`}
  description={data.entry.summary}
/>

<EntryDetailShell kind="Experience" entry={data.entry} backHref="/experience" />
