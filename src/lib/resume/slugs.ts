import type { ResumeEntry } from "./schema";

const slugify = (value: string) =>
  value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const getResumeEntrySlug = (entry: ResumeEntry) => {
  const [year, month] = entry.period.start.split("-");
  return slugify(`${entry.name}-${month}-${year}`);
};

export const getUniqueResumeEntrySlugs = (entries: readonly ResumeEntry[]) => {
  const slugs = entries.map(getResumeEntrySlug);
  const duplicate = slugs.find((slug, index) => slugs.indexOf(slug) !== index);

  if (duplicate) throw new Error(`Duplicate résumé entry slug: ${duplicate}`);

  return slugs;
};
