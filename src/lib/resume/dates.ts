import type { DatePeriod, ResumeDate, YearMonth } from "./schema";

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

export const formatResumePeriods = (periods: readonly DatePeriod[], separator = "; ") =>
  periods.map(formatResumePeriod).join(separator);
