<script lang="ts">
  import { resume } from "$lib/resume";

  import LandingFacts from "./LandingFacts.svelte";
</script>

<section class="hero">
  <div class="hero-top">
    <div class="title">
      <p class="role">{resume.basics.label}</p>
      <h1>{resume.basics.name}</h1>
      {#if resume.basics.availability}
        <p class="availability">
          <span aria-hidden="true"></span>{resume.basics.availability}
        </p>
      {/if}
    </div>
    <LandingFacts />
  </div>
</section>

<style>
  .hero {
    height: calc(100svh - var(--header-height));
    padding: 6vh 4.5vw 5vh;
    display: grid;
    align-items: center;
  }

  .hero-top {
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    gap: 6vw;
    align-items: center;
  }

  .role {
    margin: 0;
    color: var(--color-accent);
    font-size: 18px;
  }

  h1 {
    max-width: 1000px;
    margin: 24px 0 0;
    color: var(--color-text);
    white-space: nowrap;
    font-size: clamp(60px, 6.8vw, 96px);
    line-height: 0.85;
    letter-spacing: -0.07em;
  }

  .availability {
    margin: 36px 0 0;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-text-muted);
    font-size: 15px;
  }

  .availability span {
    width: 7px;
    height: 7px;
    flex: none;
    background: var(--color-accent);
  }

  @media (min-width: 901px) {
    .role {
      font-size: 20px;
    }

    .title .availability {
      margin-top: 48px;
      font-size: 16px;
    }

    h1 {
      font-size: clamp(68px, 7.2vw, 108px);
    }
  }

  @media (max-width: 1040px) {
    .hero-top {
      grid-template-columns: 1.1fr 0.9fr;
      gap: 4vw;
    }

    h1 {
      white-space: normal;
    }
  }

  @media (max-width: 720px) {
    .hero {
      height: auto;
      min-height: calc(100svh - var(--header-height));
      padding-top: 56px;
      padding-bottom: 56px;
    }

    .hero-top {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }

  @media (max-height: 700px) and (min-width: 721px) {
    .hero {
      height: auto;
      min-height: calc(100svh - var(--header-height));
      padding-top: 42px;
      padding-bottom: 42px;
    }
  }
</style>
