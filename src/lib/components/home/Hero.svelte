<script lang="ts">
  import { resume } from "$lib/resume";

  import EducationSection from "./EducationSection.svelte";
</script>

<section class="hero" aria-labelledby="intro-heading">
  <h1 id="intro-heading">{resume.basics.name}</h1>
  <div class="role-line">
    <p class="role">{resume.basics.label}</p>
    {#if resume.basics.availability}<p class="availability">
        <span aria-hidden="true">·</span>{resume.basics.availability}
      </p>{/if}
  </div>
  <div id="about">
    <p class="description">{resume.basics.description}</p>
  </div>
  <div class="intro-actions">
    <a
      class="email-address"
      href={`mailto:${resume.basics.email}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`Email ${resume.basics.email}, opens your email app`}
      >{resume.basics.email}<span class="link-arrow" aria-hidden="true">↗</span></a
    >
    <nav aria-label="Contact and profile links">
      {#each resume.basics.profiles as profile}
        <a
          href={profile.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${profile.label} profile, opens in a new tab`}
          >{profile.label}<span class="link-arrow" aria-hidden="true">↗</span></a
        >
      {/each}
    </nav>
  </div>
  <EducationSection />
</section>

<style>
  .email-address {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-top: 0;
    font-size: var(--font-size-link);
    overflow-wrap: anywhere;
  }
  .hero {
    position: sticky;
    top: calc(var(--header-height) + 24px);
    padding-bottom: 0;
  }
  .role-line {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 6px 12px;
  }
  .availability {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin: 0;
    color: var(--color-text-muted);
    font-size: 15px;
    font-weight: 500;
  }
  h1 {
    max-width: 8ch;
    margin: 0 0 18px;
    font-size: clamp(44px, 4vw, 76px);
    font-weight: 700;
    line-height: 1.04;
    letter-spacing: -0.035em;
  }
  .role {
    margin: 0;
    font-size: 21px;
    letter-spacing: -0.025em;
  }
  .description {
    max-width: 42ch;
    margin: 24px 0 0;
    color: var(--color-text-muted);
    font-size: var(--font-size-body);
    line-height: 1.65;
  }
  .intro-actions {
    margin-top: 24px;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 4px;
    font-size: var(--font-size-link);
  }
  nav a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
  @media (max-width: 1000px) {
    .hero {
      position: static;
      padding-bottom: 16px;
    }
    h1 {
      max-width: none;
    }
    .description {
      max-width: 54ch;
    }
  }
  @media (max-height: 700px) {
    .hero {
      position: static;
    }
  }
</style>
