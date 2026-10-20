<script lang="ts">
  import { page } from "$app/state";
  import { basics } from "$lib/resume/basics";

  let { title, description }: { title: string; description: string } = $props();

  // Prerendering has no real host, so share links are built from the public site address.
  const url = $derived(new URL(page.url.pathname, basics.url).href);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={basics.name} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta name="twitter:card" content="summary" />
</svelte:head>
