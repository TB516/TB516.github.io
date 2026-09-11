<script lang="ts">
  import { resume } from "$lib/resume";
</script>

<a class="skip-link" href="#main-content">Skip to content</a>
<header class="site-header">
  <div class="header-inner container">
    <a class="name" href="/" aria-label={`${resume.basics.name}, home`}>{resume.basics.name}</a>
    <a
      class="resume-link"
      href="/Thomas_Berrios_Resume.pdf"
      target="_blank"
      rel="noreferrer"
      aria-label="Résumé PDF, opens in a new tab"
      >Résumé<span class="link-arrow" aria-hidden="true">↗</span>
    </a>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    z-index: 20;
    top: 0;
    background: color-mix(in srgb, var(--color-background) 96%, transparent);
    backdrop-filter: blur(12px);
  }
  .header-inner {
    min-height: var(--header-height);
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 28px;
  }
  a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
  .name {
    color: var(--color-text);
    width: fit-content;
    font-size: 16px;
    font-weight: 650;
  }
  .resume-link {
    padding: 0 14px;
    background: var(--color-surface);
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-width: 640px) {
    .header-inner {
      gap: 16px;
    }
    .name {
      color: var(--color-text);
      font-size: 15px;
    }
    .resume-link {
      padding-inline: 10px;
    }
  }
</style>
