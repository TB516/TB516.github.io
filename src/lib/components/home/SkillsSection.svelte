<script lang="ts">
  import { resume } from "$lib/resume";
</script>

<div class="skills-screen" id="skills">
  <section class="skills-section" aria-labelledby="skills-heading">
    <div class="section-inner">
      <h2 class="section-title" id="skills-heading">Skills</h2>
      <div class="skill-groups">
        {#each resume.skills as group}
          <article>
            <h3>{group.name}</h3>
            <p>{group.keywords.join(" · ")}</p>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <footer class="contact-shelf">
    <nav class="contact-links" aria-label="Footer contact links">
      <a class="contact-email" href={`mailto:${resume.basics.email}`}>
        {resume.basics.email}<span class="link-arrow" aria-hidden="true">↗</span>
      </a>
      {#each resume.basics.profiles as profile}
        <a
          href={profile.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${profile.label} profile for ${resume.basics.name}, opens in a new tab`}
        >
          {profile.label}<span class="link-arrow" aria-hidden="true">↗</span>
        </a>
      {/each}
    </nav>
  </footer>
</div>

<style>
  .skills-screen {
    min-height: calc(100svh - var(--header-height));
    display: grid;
    grid-template-rows: 1fr auto;
    background: var(--color-surface);
    scroll-margin-top: var(--header-height);
  }

  .skills-section {
    padding: clamp(54px, 6vh, 76px) 4.5vw clamp(36px, 4vh, 52px);
    display: grid;
    align-items: center;
  }

  .section-inner {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  .section-title {
    margin: 0 0 clamp(22px, 3vh, 34px);
    font-size: clamp(36px, 3vw, 46px);
    font-weight: 560;
    letter-spacing: -0.025em;
  }

  .skill-groups {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: clamp(12px, 1.4vw, 22px);
  }

  article {
    min-height: 200px;
    padding: clamp(24px, 2vw, 31px);
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 28px;
    background: var(--color-raised);
  }

  article:nth-child(-n + 2) {
    min-height: 220px;
    grid-column: span 3;
  }

  h3 {
    margin: 0;
    color: var(--color-accent);
    font-size: 21px;
    font-weight: 600;
    line-height: 1.25;
  }

  article p {
    margin: 0;
    color: var(--color-text-muted);
    font-size: 17px;
    line-height: 1.6;
  }

  .contact-shelf {
    padding: 25px 4.5vw 28px;
    background: var(--color-background);
  }

  .contact-links {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: center;
    gap: 14px 28px;
    color: var(--color-text-muted);
    font-size: 14px;
  }

  .contact-links a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-self: start;
  }

  .contact-links a:nth-child(2) {
    justify-self: center;
  }

  .contact-links a:last-child {
    justify-self: end;
  }

  .contact-email {
    font-size: 18px;
  }

  @media (min-width: 901px) {
    .section-title {
      font-size: clamp(42px, 3.4vw, 52px);
    }

    h3 {
      font-size: clamp(23px, 1.8vw, 28px);
    }

    article p {
      font-size: 18px;
    }

    .contact-email {
      font-size: 19px;
    }

    .contact-links {
      font-size: 16px;
    }
  }

  @media (max-width: 900px) {
    .skill-groups {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    article,
    article:nth-child(-n + 2) {
      min-height: 0;
      grid-column: span 1;
    }
  }

  @media (max-width: 720px) {
    .skills-section {
      padding-top: 70px;
      padding-bottom: 42px;
    }

    .skill-groups {
      grid-template-columns: 1fr;
      gap: 7px;
    }

    article,
    article:nth-child(-n + 2) {
      padding: 23px;
      gap: 18px;
    }

    .contact-shelf {
      padding-top: 28px;
      padding-bottom: 31px;
    }

    .contact-links {
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 10px;
      text-align: center;
    }

    .contact-links a {
      justify-self: center;
    }
  }
</style>
