import { formatResumePeriod } from "$lib/resume/dates";
import {
  getExperiencePeriod,
  getExperienceSlug,
  getExperienceTitles,
} from "$lib/resume/experience";
import type { Experience, ResumeEntry } from "$lib/resume/schema";
import { getResumeEntrySlug } from "$lib/resume/slugs";

/** What an overview card displays, independent of the kind of entry behind it. */
export interface CardContent {
  title: string;
  /** Short lines under the title, such as roles and dates. */
  meta: string[];
  summary: string;
  href: string;
}

export const getProjectCard = (project: ResumeEntry): CardContent => ({
  title: project.name,
  meta: [project.roles.join(", ")],
  summary: project.summary,
  href: `/projects/${getResumeEntrySlug(project)}`,
});

export const getExperienceCard = (experience: Experience): CardContent => ({
  title: experience.name,
  meta: [...getExperienceTitles(experience), formatResumePeriod(getExperiencePeriod(experience))],
  summary: experience.summary,
  href: `/experience/${getExperienceSlug(experience)}`,
});
