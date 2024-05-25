import { DOMProps } from "../types.ts";
import { attributes, knowledges, skills } from "../consts.ts";
import { SelectInput } from "./SelectInput.tsx";

export const AttributeSelect = ({ name, ...rest }: DOMProps<"select">) => (
  <SelectInput name={name} defaultValue={0} i18n="attribute-u" {...rest}>
    {/*todo replace optgroup with styled option[disabled]*/}
    <optgroup label="Physical">
      <option value="@{Strength}+@{StrengthBoost}" data-i18n="strength-u" />
      <option value="@{Dexterity}+@{DexterityBoost}" data-i18n="dexterity-u" />
      <option value="@{Stamina}+@{StaminaBoost}" data-i18n="stamina-u" />
    </optgroup>
    <optgroup label="Social">
      <option value="@{Charisma}+@{CharismaBoost}" data-i18n="charisma-u" />
      <option value="@{Manipulation}+@{ManipulationBoost}" data-i18n="manipulation-u" />
      <option value="@{Appearance}+@{AppearanceBoost}" data-i18n="appearance-u" />
    </optgroup>
    <optgroup label="Mental">
      <option value="@{Perception}+@{PerceptionBoost}" data-i18n="perception-u" />
      <option value="@{Intelligence}+@{IntelligenceBoost}" data-i18n="intelligence-u" />
      <option value="@{Wits}+@{WitsBoost}" data-i18n="wits-u" />
    </optgroup>
    <optgroup label="Other">
      <option value={0}>---</option>
    </optgroup>
  </SelectInput>
);

export const AbilitySelect = ({ name, ...rest }: DOMProps<"select">) => (
  <SelectInput name={name} defaultValue={0} i18n="ability-u" {...rest}>
    <optgroup label="Attributes">
      {attributes.map((key) => (
        <option key={key} value={`@{${key}}`} data-i18n={`${key}-u`} />
      ))}
    </optgroup>
    <optgroup label="Skills">
      {skills.map((key) => (
        <option key={key} value={`@{${key}}`} data-i18n={`${key}-u`} />
      ))}
    </optgroup>
    <optgroup label="Knowledges">
      {knowledges.map((key) => (
        <option key={key} value={`@{${key}}`} data-i18n={`${key}-u`} />
      ))}
    </optgroup>
    <optgroup label="Other">
      <option value={0}>---</option>
    </optgroup>
  </SelectInput>
);
