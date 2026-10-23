import type { DatePeriod, Experience } from "./schema";
import { getResumeEntrySlug } from "./slugs";

/** Spans from the oldest position's start to the newest position's end. */
export const getExperiencePeriod = ({ positions }: Experience): DatePeriod => ({
  start: positions[positions.length - 1].period.start,
  end: positions[0].period.end,
});

export const getExperienceSlug = (experience: Experience) =>
  getResumeEntrySlug({ name: experience.name, period: getExperiencePeriod(experience) });

/** One line per position, newest first, so promotions read top to bottom. */
export const getExperienceTitles = ({ positions }: Experience) =>
  positions.map((position) => position.roles.join(", "));
