type Month = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";

/** A calendar month in the `YYYY-MM` form used throughout the résumé. */
export type YearMonth = `${number}-${Month}`;

/** A concrete calendar month or an interval that is still ongoing. */
export type ResumeDate = YearMonth | "present";

/** One continuous interval, inclusive of its starting and ending months. */
export interface DatePeriod {
  start: YearMonth;
  end: ResumeDate;
}

/** A labeled destination such as a profile, repository, or project page. */
export interface Link {
  label: string;
  url: string;
}

/** Personal identity and contact information. */
export interface Basics {
  name: string;
  /** Professional title or headline. */
  label: string;
  /** Concise professional overview used in page metadata. */
  description: string;
  /** Current availability or employment-search status. */
  availability?: string;
  email: string;
  /** Public professional and social profiles. */
  profiles: Link[];
}

/** A completed or ongoing course of formal study. */
export interface Education {
  institution: string;
  /** Primary subject or field of study. */
  area: string;
  /** Degree or credential earned. */
  studyType: string;
  /** The single continuous interval covered by this course of study. */
  period: DatePeriod;
  /** Academic distinctions awarded as part of the program. */
  honors?: string[];
  /** Secondary fields of study completed alongside the primary degree. */
  minors?: string[];
  /** Other relevant context that does not fit a structured field. */
  summary?: string;
}

/** A category of related technical or professional skills. */
export interface SkillGroup {
  name: string;
  keywords: string[];
}

/** One continuous work or project engagement displayed throughout the portfolio and résumé. */
export interface ResumeEntry {
  /** Employer, organization, or project name. */
  name: string;
  /** Capacities in which the work or project was performed. */
  roles: string[];
  /** The single continuous interval covered by this engagement. */
  period: DatePeriod;
  location?: string;
  /** Brief overview used in portfolio summaries. */
  summary: string;
  /** Concrete accomplishments, responsibilities, or outcomes. */
  highlights: string[];
  /** Technologies, tools, and areas of expertise applied to the entry. */
  keywords?: string[];
  /** Relevant destinations such as an organization page, repository, or release. */
  links?: Link[];
}

/** Complete source data for every résumé representation. */
export interface Resume {
  basics: Basics;
  /** Entries are stored in their preferred display order. */
  education: Education[];
  skills: SkillGroup[];
  work: ResumeEntry[];
  projects: ResumeEntry[];
}
