import { error } from "@sveltejs/kit";

import { resume } from "$lib/resume";
import { getResumeEntrySlug, getUniqueResumeEntrySlugs } from "$lib/resume/slugs";

import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  getUniqueResumeEntrySlugs(resume.projects).map((slug) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
  const entry = resume.projects.find((entry) => getResumeEntrySlug(entry) === params.slug);

  if (!entry) error(404, "Project not found");

  return { entry };
};
