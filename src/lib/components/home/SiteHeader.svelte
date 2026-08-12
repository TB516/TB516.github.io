<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { resume } from "$lib/resume";

  const isHome = $derived(page.url.pathname === "/");

  const isUnmodifiedPrimaryClick = (event: MouseEvent) =>
    event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;

  async function navigateToHomeTop(event: MouseEvent) {
    if (!isHome || !isUnmodifiedPrimaryClick(event)) return;

    event.preventDefault();

    if (page.url.hash) {
      await goto("/", { noScroll: true, keepFocus: true });
    }

    window.scrollTo(0, 0);
  }

  async function navigateToHomeSection(event: MouseEvent, id: string) {
    if (!isHome || !isUnmodifiedPrimaryClick(event)) return;

    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();

    const hash = `#${id}`;
    if (page.url.hash !== hash) {
      await goto(hash, { noScroll: true, keepFocus: true });
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }
</script>

<header class="site-header">
  <a class="name" href="/" onclick={navigateToHomeTop}>{resume.basics.name}</a>
  <nav aria-label="Main navigation">
    <a
      href={isHome ? "#experience" : "/#experience"}
      onclick={(event) => navigateToHomeSection(event, "experience")}>Experience</a
    >
    <a
      href={isHome ? "#projects" : "/#projects"}
      onclick={(event) => navigateToHomeSection(event, "projects")}>Projects</a
    >
    <a
      href={isHome ? "#skills" : "/#skills"}
      onclick={(event) => navigateToHomeSection(event, "skills")}>Skills</a
    >
  </nav>
  <a
    class="resume-link"
    href="/Thomas_Berrios_Resume.pdf"
    target="_blank"
    rel="noreferrer"
    aria-label="Résumé, opens in a new tab"
    >Résumé<span class="link-arrow" aria-hidden="true">↗</span></a
  >
</header>

<style>
  .site-header {
    position: sticky;
    z-index: 20;
    top: 0;
    min-height: var(--header-height);
    padding: 0 4.5vw;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 28px;
    background: color-mix(in srgb, var(--color-background) 94%, transparent);
    box-shadow: 0 12px 32px #0003;
    backdrop-filter: blur(14px);
  }

  .site-header a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  .name {
    justify-self: start;
    font-weight: 650;
  }

  nav {
    display: flex;
    gap: 28px;
    color: var(--color-text-muted);
    font-size: 15px;
  }

  .resume-link {
    justify-self: end;
    color: var(--color-accent);
    font-size: 15px;
  }

  @media (min-width: 901px) {
    nav,
    .resume-link {
      font-size: 16px;
    }
  }

  @media (max-width: 720px) {
    .site-header {
      grid-template-columns: 1fr auto;
    }

    nav {
      display: none;
    }
  }
</style>
