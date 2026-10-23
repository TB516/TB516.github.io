import { compareDatePeriods } from "../dates";
import type { ResumeEntry } from "../schema";
import { bluefin } from "./bluefin";
import { flatpakSshDevTemplate } from "./flatpak-ssh-dev-template";
import { heliumPackaging } from "./helium-packaging";
import { mixamp } from "./mixamp";
import { personalOS } from "./personal-os";
import { r2modman } from "./r2modman";
import { sveltekitPdfRenderer } from "./sveltekit-pdf-renderer";
import { t3CodeFlatpak } from "./t3-code-flatpak";

export const projects: ResumeEntry[] = [
  personalOS,
  bluefin,
  sveltekitPdfRenderer,
  mixamp,
  flatpakSshDevTemplate,
  t3CodeFlatpak,
  heliumPackaging,
  r2modman,
].toSorted((a, b) => compareDatePeriods(a.period, b.period));
