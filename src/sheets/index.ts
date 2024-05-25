import { ReactNode } from "react";
import { I18n } from "../types.ts";
import { SheetPrimary } from "./SheetPrimary.tsx";
import { SheetBackgrounds } from "./SheetBackgrounds.tsx";
import { SheetMerits } from "./SheetMerits.tsx";
import { SheetPowers } from "./SheetPowers.tsx";
import { SheetTraits } from "./SheetTraits.tsx";
import { SheetNotes } from "./SheetNotes.tsx";
import { SheetBonds } from "./SheetBonds.tsx";
import { SheetSorcery } from "./SheetSorcery.tsx";
import { SheetInfo } from "./SheetInfo.tsx";
import { SheetExperience } from "./SheetExperience.tsx";
import { SheetCombat } from "./SheetCombat.tsx";
import { SheetDice } from "./SheetDice.tsx";

export const sheets: Partial<Record<I18n, () => ReactNode>> = {
  "Primary": SheetPrimary,
  "backgrounds-u": SheetBackgrounds,
  "MeritsFlaws": SheetMerits,
  "Powers": SheetPowers,
  "OtherTraits": SheetTraits,
  "Notes": SheetNotes,
  "BondBoon": SheetBonds,
  "BloodSorcery": SheetSorcery,
  "Information": SheetInfo,
  "experience-u": SheetExperience,
  "Combat": SheetCombat,
  "Dice": SheetDice,
};
