import { error } from "@sveltejs/kit";

import { getResumeEntrySlug, getUniqueResumeEntrySlugs } from "$lib/resume/slugs";
import { work } from "$lib/resume/work";

import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  getUniqueResumeEntrySlugs(work).map((slug) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
  const entry = work.find((entry) => getResumeEntrySlug(entry) === params.slug);

  if (!entry) error(404, "Experience not found");

  return { entry };
};
