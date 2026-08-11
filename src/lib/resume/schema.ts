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

/** One or more intervals, ordered from most recent to oldest. */
export type DatePeriods = [DatePeriod, ...DatePeriod[]];

/** A labeled destination such as a profile, repository, or project page. */
export interface Link {
  label: string;
  url: string;
}

/** Common chronological information for education, work, and projects. */
interface Dated {
  periods: DatePeriods;
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
export interface Education extends Dated {
  institution: string;
  /** Primary subject or field of study. */
  area: string;
  /** Degree or credential earned. */
  studyType: string;
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

/** Accomplishments, technologies, and references shared by work and project entries. */
interface ResumeEntry {
  /** Brief overview used in portfolio summaries. */
  summary: string;
  /** Concrete accomplishments, responsibilities, or outcomes. */
  highlights: string[];
  /** Technologies, tools, and areas of expertise applied to the entry. */
  keywords?: string[];
  /** Relevant destinations such as an organization page, repository, or release. */
  links?: Link[];
}

/** A professional role held at an organization during one or more periods. */
export interface WorkExperience extends ResumeEntry, Dated {
  /** Employer, client, or organization name. */
  name: string;
  /** Title held within the organization. */
  position: string;
  location?: string;
}

/** A personal, academic, professional, or open-source project. */
export interface Project extends ResumeEntry, Dated {
  name: string;
  /** Capacities in which the project was created or supported. */
  roles: string[];
}

/** Complete source data for every résumé representation. */
export interface Resume {
  basics: Basics;
  /** Entries are stored in their preferred display order. */
  education: Education[];
  skills: SkillGroup[];
  work: WorkExperience[];
  projects: Project[];
}
