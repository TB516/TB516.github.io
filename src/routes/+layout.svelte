<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import SiteHeader from "$lib/components/home/SiteHeader.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="theme-color" content="#0d0f14" />
</svelte:head>

<SiteHeader />
{@render children()}
