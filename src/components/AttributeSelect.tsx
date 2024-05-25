import { DOMProps, I18n } from "../types.ts";
import { talents, knowledges, skills } from "../consts.ts";
import { SelectInput } from "./SelectInput.tsx";

export const AttributeSelect = ({ name, i18n = "attribute-u", ...rest }: DOMProps<"select", { i18n?: I18n }>) => (
  <SelectInput name={name} defaultValue={0} i18n={i18n} {...rest}>
    {/*todo replace optgroup with styled option[disabled]*/}
    <optgroup label="Physical">
      <option value="Strength" data-i18n="strength-u" />
      <option value="Dexterity" data-i18n="dexterity-u" />
      <option value="Stamina" data-i18n="stamina-u" />
    </optgroup>
    <optgroup label="Social">
      <option value="Charisma" data-i18n="charisma-u" />
      <option value="Manipulation" data-i18n="manipulation-u" />
      <option value="Appearance" data-i18n="appearance-u" />
    </optgroup>
    <optgroup label="Mental">
      <option value="Perception" data-i18n="perception-u" />
      <option value="Intelligence" data-i18n="intelligence-u" />
      <option value="Wits" data-i18n="wits-u" />
    </optgroup>
    <optgroup label="Other">
      <option value={0}>---</option>
    </optgroup>
  </SelectInput>
);

export const SkillSelect = ({ name, ...rest }: DOMProps<"select">) => (
  <SelectInput name={name} defaultValue={0} i18n="ability-u" {...rest}>
    <optgroup label="Attributes">
      {talents.map((key) => (
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
