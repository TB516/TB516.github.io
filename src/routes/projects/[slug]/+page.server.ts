import { error } from "@sveltejs/kit";

import { projects } from "$lib/resume/projects";
import { getResumeEntrySlug, getUniqueResumeEntrySlugs } from "$lib/resume/slugs";

import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  getUniqueResumeEntrySlugs(projects).map((slug) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
  const entry = projects.find((entry) => getResumeEntrySlug(entry) === params.slug);

  if (!entry) error(404, "Project not found");

  return { entry };
};
