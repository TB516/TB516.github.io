<script lang="ts">
  import { page } from "$app/state";
  import { resume } from "$lib/resume";

  const isNotFound = $derived(page.status === 404);
  const heading = $derived(isNotFound ? "Page not found" : "Something went wrong");
  const description = $derived(
    isNotFound
      ? "The page you were looking for does not exist or may have moved."
      : "The page could not be loaded. Try returning home and starting again.",
  );
</script>

<svelte:head>
  <title>{page.status} {heading} – {resume.basics.name}</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main class="error-page">
  <div class="error-inner">
    <p class="status">{page.status}</p>
    <h1>{heading}</h1>
    <p class="description">{description}</p>

    <nav aria-label="Error recovery">
      <a class="home-link" href="/">Return home</a>
      <a href="/#experience">View experiences</a>
      <a href="/#projects">View projects</a>
    </nav>
  </div>
</main>

<style>
  .error-page {
    min-height: calc(100svh - var(--header-height));
    padding: clamp(56px, 9vh, 104px) 4.5vw;
    display: grid;
    align-items: center;
    background: var(--color-surface);
  }

  .error-inner {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .status {
    margin: 0;
    color: var(--color-accent);
    font:
      700 clamp(26px, 2.5vw, 38px) / 1 ui-monospace,
      SFMono-Regular,
      Menlo,
      monospace;
    letter-spacing: 0.06em;
  }

  h1 {
    max-width: 900px;
    margin: 18px 0 0;
    font-size: clamp(52px, 7vw, 104px);
    font-weight: 650;
    line-height: 0.95;
    letter-spacing: -0.055em;
  }

  .description {
    max-width: 700px;
    margin: 30px 0 0;
    color: var(--color-text-muted);
    font-size: clamp(19px, 1.7vw, 25px);
    line-height: 1.55;
  }

  nav {
    margin-top: clamp(42px, 6vh, 64px);
    display: flex;
    gap: 18px 32px;
    flex-wrap: wrap;
    color: var(--color-text-muted);
  }

  .home-link {
    color: var(--color-text);
  }

  @media (max-width: 720px) {
    .error-page {
      align-items: start;
      padding-top: clamp(80px, 15vh, 132px);
    }

    h1 {
      font-size: clamp(48px, 15vw, 72px);
    }

    .description {
      margin-top: 24px;
    }

    nav {
      margin-top: 40px;
    }
  }
</style>
