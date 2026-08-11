<script lang="ts">
  import { resume } from "$lib/resume";
</script>

<header class="site-header">
  <a class="name" href="#top">{resume.basics.name}</a>
  <nav aria-label="Main navigation">
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
  </nav>
  <a class="resume-link" href="/Thomas_Berrios_Resume.pdf" target="_blank" rel="noreferrer"
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

  .name {
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
