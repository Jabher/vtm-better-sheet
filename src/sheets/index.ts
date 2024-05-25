import { ReactNode } from "react";
import { I18n } from "../types.ts";
import { SheetPrimary } from "./SheetPrimary.tsx";
import { SheetMerits } from "./SheetMerits.tsx";
import { SheetPowers } from "./SheetPowers.tsx";
import { SheetNotes } from "./SheetNotes.tsx";
import { SheetBonds } from "./SheetBonds.tsx";
import { SheetSorcery } from "./SheetSorcery.tsx";
import { SheetInfo } from "./SheetInfo.tsx";
import { SheetExperience } from "./SheetExperience.tsx";
import { SheetCombat } from "./SheetCombat.tsx";
import { SheetDice } from "./SheetDice.tsx";

export const sheets: Partial<Record<I18n, () => ReactNode>> = {
  "Primary": SheetPrimary,
  "MeritsFlaws": SheetMerits,
  "Powers": SheetPowers,
  "Notes": SheetNotes, // todo info + notes
  "BondBoon": SheetBonds,
  "rituals-label": SheetSorcery,
  "Information": SheetInfo,
  "experience-u": SheetExperience,
  "Combat": SheetCombat,
  "Dice": SheetDice,
};
