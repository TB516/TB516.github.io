<svelte:options css="injected" />

<script lang="ts">
  import { resume } from "$lib/resume";
  import { formatResumePeriod } from "$lib/resume/dates";
  import { formatEducationDetails } from "$lib/resume/education";
  import type { ResumeEntry } from "$lib/resume/schema";

  const work = resume.work.slice(0, 3);
  const projects = resume.projects.filter((project) => !project.excludeFromResume).slice(0, 2);

  const groupAdjacentEntries = (entries: readonly ResumeEntry[]) => {
    const groups: ResumeEntry[][] = [];

    for (const entry of entries) {
      const previousGroup = groups.at(-1);

      if (previousGroup?.[0].name === entry.name) {
        previousGroup.push(entry);
      } else {
        groups.push([entry]);
      }
    }

    return groups;
  };

  const workGroups = groupAdjacentEntries(work);

  const getProjectRepositoryUrl = (project: ResumeEntry) =>
    project.links?.find(({ label }) => label === "GitHub" || label === "Upstream repository")?.url;
</script>

<svelte:head>
  <title>{resume.basics.name} - Resume</title>
</svelte:head>

<main>
  <header>
    <h1>{resume.basics.name}</h1>
    <div class="headline">{resume.basics.label}</div>
    <address>
      <a href={`mailto:${resume.basics.email}`}>{resume.basics.email}</a>
      <span>|</span>
      <a href={`tel:${resume.basics.phone}`}>{resume.basics.phone}</a>
      {#each resume.basics.profiles as profile}
        <span>|</span>
        <a href={profile.url}>{profile.label}</a>
      {/each}
    </address>
  </header>

  <section>
    <h2>Education</h2>
    {#each resume.education as education}
      <article>
        <div class="heading">
          <div>
            <strong>{education.institution}</strong>, {education.studyType} in {education.area}
          </div>
          <div>{formatResumePeriod(education.period)}</div>
        </div>
        <div>{formatEducationDetails(education)}</div>
      </article>
    {/each}
  </section>

  <section>
    <h2>Technical Skills</h2>
    {#each resume.skills as skill}
      <div class="skill"><strong>{skill.name}:</strong> {skill.keywords.join(", ")}</div>
    {/each}
  </section>

  <section>
    <h2>Work Experience</h2>
    {#each workGroups as jobs}
      <article>
        {#if jobs.length === 1}
          {@const job = jobs[0]}
          <div class="heading">
            <div>
              <strong>{job.roles.join(", ")}</strong>, {job.name}{#if job.location}{" – "}{job.location}{/if}
            </div>
            <div>{formatResumePeriod(job.period)}</div>
          </div>
          <ul>
            {#each job.highlights as highlight}<li>{highlight}</li>{/each}
          </ul>
        {:else}
          <div class="company-name"><strong>{jobs[0].name}</strong></div>
          <div class="engagements">
            {#each jobs as job}
              <div class="engagement">
                <div class="heading">
                  <div>
                    <strong>{job.roles.join(", ")}</strong
                    >{#if job.location}{" – "}{job.location}{/if}
                  </div>
                  <div>{formatResumePeriod(job.period)}</div>
                </div>
                <ul>
                  {#each job.highlights as highlight}<li>{highlight}</li>{/each}
                </ul>
              </div>
            {/each}
          </div>
        {/if}
      </article>
    {/each}
  </section>

  <section>
    <h2>Projects &amp; Open Source</h2>
    {#each projects as project}
      {@const repositoryUrl = getProjectRepositoryUrl(project)}
      <article>
        <div class="heading">
          <strong>
            {#if repositoryUrl}
              <a href={repositoryUrl}>{project.name}</a>
            {:else}
              {project.name}
            {/if}
          </strong>
          <div>{formatResumePeriod(project.period)}</div>
        </div>
        <div>{project.roles.join(", ")}</div>
        <ul>
          {#each project.highlights as highlight}<li>{highlight}</li>{/each}
        </ul>
      </article>
    {/each}
  </section>
</main>

<style>
  @page {
    size: Letter;
    margin: 0.35in 0.45in 0.25in;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    color: #000;
    font:
      9.5pt/1.35 XCharter,
      Charter,
      serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  header {
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: 16pt;
    font-weight: 400;
    line-height: 1;
  }

  .headline {
    font-size: 10.5pt;
  }

  address {
    margin: 0 0 0.25cm;
    font-size: 9pt;
    font-style: normal;
  }

  address span {
    margin: 0 0.2cm;
  }

  section {
    margin-top: 0.13cm;
  }

  h2 {
    margin: 0 0 0.1cm;
    border-bottom: 0.5pt solid;
    font-size: 12pt;
    line-height: 1.1;
  }

  article {
    margin-bottom: 0.28cm;
    break-inside: avoid;
  }

  article:last-child {
    margin-bottom: 0;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    gap: 0.35cm;
  }

  .heading > :last-child {
    flex: none;
    text-align: right;
    white-space: pre-line;
  }

  .company-name {
    margin-bottom: 0.05cm;
  }

  .engagements {
    margin-left: 0.08cm;
    padding-left: 0.16cm;
    border-left: 0.6pt solid #888;
  }

  .engagement + .engagement {
    margin-top: 0.14cm;
  }

  ul {
    margin: 0.05cm 0 0;
    padding-left: 1.15em;
  }

  li {
    line-height: 1.5;
  }

  li::marker {
    font-size: 0.75em;
  }

  .skill {
    line-height: 1.45;
  }
</style>
