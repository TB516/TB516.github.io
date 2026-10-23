import { error } from "@sveltejs/kit";

import { getExperienceSlug } from "$lib/resume/experience";
import { assertUniqueSlugs } from "$lib/resume/slugs";
import { work } from "$lib/resume/work";

import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  assertUniqueSlugs(work.map(getExperienceSlug)).map((slug) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
  const experience = work.find((experience) => getExperienceSlug(experience) === params.slug);

  if (!experience) error(404, "Experience not found");

  return { experience };
};
