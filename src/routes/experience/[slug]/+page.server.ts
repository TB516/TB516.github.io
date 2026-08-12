import { error } from "@sveltejs/kit";

import { resume } from "$lib/resume";
import type { ResumeEntry } from "$lib/resume/schema";
import { getResumeEntrySlug, getUniqueResumeEntrySlugs } from "$lib/resume/slugs";

import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  getUniqueResumeEntrySlugs(resume.work).map((slug) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
  const entry: ResumeEntry | undefined = resume.work.find(
    (entry) => getResumeEntrySlug(entry) === params.slug,
  );

  if (!entry) error(404, "Experience not found");

  return { entry };
};
