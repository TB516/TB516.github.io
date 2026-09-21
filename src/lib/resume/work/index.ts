import { compareEntryDates } from "../dates";
import { idTechTeenAcademy2026, idTechTeenAcademy2024, idTechTechCamp2024 } from "./id-tech";
import { ritTeachingAssistant, ritBackendDeveloper } from "./rit";

export const work = [
  idTechTeenAcademy2026,
  idTechTeenAcademy2024,
  idTechTechCamp2024,
  ritTeachingAssistant,
  ritBackendDeveloper,
].toSorted(compareEntryDates);
