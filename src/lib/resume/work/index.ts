import { compareDatePeriods } from "../dates";
import { getExperiencePeriod } from "../experience";
import type { Experience } from "../schema";
import { idTech2026, idTech2024 } from "./id-tech";
import { ritTeachingAssistant, ritBackendDeveloper } from "./rit";

export const work: Experience[] = [
  idTech2026,
  idTech2024,
  ritTeachingAssistant,
  ritBackendDeveloper,
].toSorted((a, b) => compareDatePeriods(getExperiencePeriod(a), getExperiencePeriod(b)));
