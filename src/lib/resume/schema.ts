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
  /** Personal overview used in the introduction and page metadata. */
  description: string;
  /** Current availability or employment-search status. */
  availability?: string;
  email: string;
  /** Public website address, used for canonical and share links. */
  url: string;
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

/** A titled explanation of one topic, with paragraphs, bullets, and supporting links. */
export interface EntrySection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: Link[];
}

/** A project or open-source contribution displayed throughout the portfolio and résumé. */
export interface ResumeEntry {
  /** Project name. */
  name: string;
  /** Distinguishes owned projects from contributions without changing résumé selection. */
  category?: "project" | "contribution";
  /** Substantial explanations grouped by topic. Used on the website instead of highlights when present. */
  sections?: EntrySection[];
  /** Capacities in which the project was performed. */
  roles: string[];
  /** The single continuous interval covered by this project. */
  period: DatePeriod;
  /** Brief overview of the work. */
  summary: string;
  /** Concise accomplishments, responsibilities, or outcomes. Used by the résumé, and listed on the website when sections are absent. */
  highlights: string[];
  /** Technologies, tools, and areas of expertise applied to the entry. */
  keywords?: string[];
  /** Relevant destinations such as an organization page, repository, or release. */
  links?: Link[];
}

/** One title held over one continuous interval within an experience. */
export interface Position {
  /** Titles held at the same time, such as a developer who also led DevOps. */
  roles: string[];
  period: DatePeriod;
  /** Concise accomplishments or responsibilities in this position. */
  highlights: string[];
}

/**
 * Continuous work at one organization, shown as one page and one résumé block.
 * Holds several positions when they read as one story, such as a promotion;
 * returning after time away or a different kind of job is a separate experience.
 */
export interface Experience {
  /** Employer or organization name. */
  name: string;
  location?: string;
  /** Brief overview covering every position. */
  summary: string;
  /** Ordered newest first; the experience's overall dates come from them. */
  positions: [Position, ...Position[]];
  /** Technologies, tools, and areas of expertise applied across the positions. */
  keywords?: string[];
}
