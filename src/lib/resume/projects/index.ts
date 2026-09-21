import { compareEntryDates } from "../dates";
import { bluefin } from "./bluefin";
import { flatpakSshDevTemplate } from "./flatpak-ssh-dev-template";
import { linuxApplicationPackaging } from "./linux-application-packaging";
import { mixamp } from "./mixamp";
import { personalOS } from "./personal-os";
import { r2modman } from "./r2modman";
import { sveltekitPdfRenderer } from "./sveltekit-pdf-renderer";
import { t3CodeFlatpak } from "./t3-code-flatpak";

export const projects = [
  personalOS,
  bluefin,
  t3CodeFlatpak,
  sveltekitPdfRenderer,
  mixamp,
  flatpakSshDevTemplate,
  linuxApplicationPackaging,
  r2modman,
].toSorted(compareEntryDates);
