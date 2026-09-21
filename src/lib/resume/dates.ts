import type { DatePeriod, ResumeDate, YearMonth } from "./schema";

/** Orders ongoing entries first, then by latest end date and latest start date. */
export const compareEntryDates = (a: { period: DatePeriod }, b: { period: DatePeriod }) => {
  if (a.period.end !== b.period.end) {
    if (a.period.end === "present") return -1;
    if (b.period.end === "present") return 1;
    return b.period.end.localeCompare(a.period.end);
  }

  return b.period.start.localeCompare(a.period.start);
};

const MONTH_ABBREVIATIONS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const parseYearMonth = (value: YearMonth) => {
  const [year, monthNumber] = value.split("-");
  return { year, month: MONTH_ABBREVIATIONS[Number(monthNumber) - 1] };
};

export const formatResumeDate = (value: ResumeDate) => {
  if (value === "present") return value;
  const { year, month } = parseYearMonth(value);
  return `${month} ${year}`;
};

export const formatResumePeriod = ({ start, end }: DatePeriod) => {
  if (start === end) return formatResumeDate(start);
  return `${formatResumeDate(start)} – ${formatResumeDate(end)}`;
};
