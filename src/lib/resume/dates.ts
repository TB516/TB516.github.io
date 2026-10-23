import type { DatePeriod, ResumeDate, YearMonth } from "./schema";

/** Orders ongoing periods first, then by latest end date and latest start date. */
export const compareDatePeriods = (a: DatePeriod, b: DatePeriod) => {
  if (a.end !== b.end) {
    if (a.end === "present") return -1;
    if (b.end === "present") return 1;
    return b.end.localeCompare(a.end);
  }

  return b.start.localeCompare(a.start);
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
