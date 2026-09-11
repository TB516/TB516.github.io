<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  import "../app.css";
  import SiteHeader from "$lib/components/home/SiteHeader.svelte";
  import { setJobHistory } from "$lib/job-history-context";

  let { children } = $props();

  // The layout persists across navigation; keep disclosure state scoped to this page session.
  const jobHistory = $state({ open: false });
  setJobHistory(jobHistory);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="theme-color" content="#0d0f14" />
</svelte:head>

<SiteHeader />
{@render children()}
