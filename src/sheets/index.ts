import { ReactNode } from "react";
import { I18n } from "../types.ts";
import { SheetPrimary } from "./SheetPrimary.tsx";
import { SheetMerits } from "./SheetMerits.tsx";
import { SheetPowers } from "./SheetPowers.tsx";
import { SheetBonds } from "./SheetBonds.tsx";
import { SheetSorcery } from "./SheetSorcery.tsx";
import { SheetInfo } from "./SheetInfo.tsx";
import { SheetExperience } from "./SheetExperience.tsx";
import { SheetCombat } from "./SheetCombat.tsx";
import { SheetBelongings } from "./SheetBelongings.tsx";

export const sheets: Partial<Record<I18n, () => ReactNode>> = {
  "Primary": SheetPrimary,
  "MeritsFlaws": SheetMerits,
  "Powers": SheetPowers,
  "rituals-label": SheetSorcery,
  "Combat": SheetCombat,
  "BondBoon": SheetBonds,
  "Belongings": SheetBelongings,
  "Information": SheetInfo,
  "experience-u": SheetExperience,
};
