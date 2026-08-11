import type { Education } from "./schema";

export const formatEducationDetails = (education: Education) => {
  const details = [...(education.honors ?? [])];

  if (education.minors?.length) {
    details.push(`Minors: ${education.minors.join(", ")}`);
  }

  if (education.summary) {
    details.push(education.summary);
  }

  return details.join("; ");
};
