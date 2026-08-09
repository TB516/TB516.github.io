<svelte:options css="injected" />

<script lang="ts">
  import { resume } from "$lib/resume";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formatDate = (date = "") => {
    if (date.toLowerCase() === "present") return "present";
    const [year, month] = date.split("-");
    return month ? `${months[Number(month) - 1]} ${year}` : year;
  };

  const dateRange = (entry: { date?: string; startDate?: string; endDate?: string }) =>
    entry.date ??
    [formatDate(entry.startDate), formatDate(entry.endDate)].filter(Boolean).join(" – ");
</script>

<svelte:head>
  <title>{resume.basics?.name} - Resume</title>
</svelte:head>

<main>
  <header>
    <h1>{resume.basics?.name}</h1>
    <div class="headline">{resume.basics?.label}</div>
    <address>
      <a href={`mailto:${resume.basics?.email}`}>{resume.basics?.email}</a>
      <span>|</span>
      <a href={`tel:${resume.basics?.phone}`}>{resume.basics?.phone}</a>
      {#each resume.basics?.profiles ?? [] as profile}
        <span>|</span>
        <a href={profile.url}>{profile.network}</a>
      {/each}
    </address>
  </header>

  <section>
    <h2>Education</h2>
    {#each resume.education ?? [] as education}
      <article>
        <div class="heading">
          <div>
            <strong>{education.institution}</strong>, {education.studyType} in {education.area}
          </div>
          <div>{dateRange(education)}</div>
        </div>
        <div>{education.summary}</div>
      </article>
    {/each}
  </section>

  <section>
    <h2>Technical Skills</h2>
    {#each resume.skills ?? [] as skill}
      <div class="skill"><strong>{skill.name}:</strong> {skill.keywords?.join(", ")}</div>
    {/each}
  </section>

  <section>
    <h2>Work Experience</h2>
    {#each resume.work ?? [] as job}
      <article>
        <div class="heading">
          <div>
            <strong>{job.position}</strong>, {job.name}{#if job.location}
              – {job.location}{/if}
          </div>
          <div>{dateRange(job)}</div>
        </div>
        <ul>
          {#each job.highlights ?? [] as highlight}<li>{highlight}</li>{/each}
        </ul>
      </article>
    {/each}
  </section>

  <section>
    <h2>Projects &amp; Open Source</h2>
    {#each resume.projects ?? [] as project}
      <article>
        <div class="heading">
          <strong>{project.name}</strong>
          <div>{dateRange(project)}</div>
        </div>
        <div>{project.roles?.join(", ")}</div>
        <ul>
          {#each project.highlights ?? [] as highlight}<li>{highlight}</li>{/each}
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
    white-space: nowrap;
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
