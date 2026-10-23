import type { DatePeriod } from "./schema";

const slugify = (value: string) =>
  value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Names a page after its entry and starting month, so repeated organizations stay distinct. */
export const getResumeEntrySlug = (entry: { name: string; period: DatePeriod }) => {
  const [year, month] = entry.period.start.split("-");
  return slugify(`${entry.name}-${month}-${year}`);
};

/** Fails the build if two pages in one collection would share an address. */
export const assertUniqueSlugs = (slugs: readonly string[]) => {
  const duplicate = slugs.find((slug, index) => slugs.indexOf(slug) !== index);

  if (duplicate) throw new Error(`Duplicate résumé entry slug: ${duplicate}`);

  return slugs;
};
