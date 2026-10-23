import { error } from "@sveltejs/kit";

import { projects } from "$lib/resume/projects";
import { assertUniqueSlugs, getResumeEntrySlug } from "$lib/resume/slugs";

import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  assertUniqueSlugs(projects.map(getResumeEntrySlug)).map((slug) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
  const entry = projects.find((entry) => getResumeEntrySlug(entry) === params.slug);

  if (!entry) error(404, "Project not found");

  return { entry };
};
