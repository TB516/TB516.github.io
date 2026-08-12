<script lang="ts">
  import { resume } from "$lib/resume";
</script>

<aside class="landing-facts">
  <section class="contact-facts" aria-labelledby="contact-heading">
    <h2 class="section-tag" id="contact-heading">Contact</h2>
    <a class="email" href={`mailto:${resume.basics.email}`}>
      {resume.basics.email}<span class="link-arrow" aria-hidden="true">↗</span>
    </a>
    <nav aria-label="Contact links">
      <a href={`tel:${resume.basics.phone}`}>
        {resume.basics.phone}<span class="link-arrow" aria-hidden="true">↗</span>
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
  </section>

  <section class="education-facts" aria-labelledby="education-heading">
    <h2 class="section-tag" id="education-heading">Education</h2>
    {#each resume.education as item}
      <article>
        <h3 class="institution">{item.institution}</h3>
        <p>{item.studyType} in {item.area}</p>
        {#if item.honors?.length || item.minors?.length}
          <div class="education-details">
            {#if item.honors?.length}
              <p><span>Honors</span>{item.honors.join(" · ")}</p>
            {/if}
            {#if item.minors?.length}
              <p><span>Minors</span>{item.minors.join(" · ")}</p>
            {/if}
          </div>
        {/if}
      </article>
    {/each}
  </section>
</aside>

<style>
  .landing-facts {
    display: grid;
    gap: 28px;
  }

  .section-tag {
    margin: 0;
    color: var(--color-accent);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .email {
    min-height: 44px;
    margin-top: 10px;
    display: inline-flex;
    align-items: center;
    color: var(--color-text-muted);
    font-size: 19px;
    overflow-wrap: anywhere;
  }

  nav {
    margin-top: 7px;
    display: flex;
    gap: 6px 15px;
    flex-wrap: wrap;
    color: var(--color-text-muted);
    font-size: 14px;
  }

  nav a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  .education-facts article {
    margin-top: 10px;
  }

  .institution {
    margin: 0 0 3px;
    font-size: 20px;
    font-weight: 560;
  }

  article p {
    margin: 0;
    color: var(--color-text-muted);
    font-size: 14px;
  }

  .education-details {
    margin-top: 11px;
    display: grid;
    gap: 5px;
  }

  .education-details p {
    display: grid;
    grid-template-columns: 58px minmax(0, 1fr);
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
  }

  .education-details span {
    color: var(--color-text-dim);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (min-width: 901px) {
    .section-tag {
      font-size: 13px;
    }

    .email {
      font-size: 21px;
    }

    nav {
      font-size: 16px;
    }

    .institution {
      font-size: 22px;
    }

    article p {
      font-size: 16px;
    }

    .education-details p {
      font-size: 15px;
    }

    .education-details span {
      font-size: 11px;
    }
  }
</style>
