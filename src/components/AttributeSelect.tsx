import { DOMProps, I18n } from "../types.ts";
import { talents, knowledges, skills } from "../consts.ts";
import { SelectInput } from "./SelectInput.tsx";

export const AttributeSelect = ({
  name,
  i18n = "attribute-u",
  defaultValue,
  ...rest
}: DOMProps<"select", { i18n?: I18n }>) => (
  <SelectInput name={name} i18n={i18n} {...rest}>
    {/*todo replace optgroup with styled option[disabled]*/}
    <option value="Strength" data-i18n="strength-u" />
    <option value="Dexterity" data-i18n="dexterity-u" />
    <option value="Stamina" data-i18n="stamina-u" />
    <option value="Charisma" data-i18n="charisma-u" />
    <option value="Manipulation" data-i18n="manipulation-u" />
    <option value="Appearance" data-i18n="appearance-u" />
    <option value="Perception" data-i18n="perception-u" />
    <option value="Intelligence" data-i18n="intelligence-u" />
    <option value="Wits" data-i18n="wits-u" />
    <option value={0}>---</option>
  </SelectInput>
);

export const SkillSelect = ({ name, ...rest }: DOMProps<"select">) => (
  <SelectInput name={name} i18n="ability-u" {...rest}>
    <option disabled data-i18n="talents-u"></option>
    {talents.map((key) => (
      <option key={key} value={key} data-i18n={`${key}-u`} />
    ))}
    <option disabled data-i18n="skills-u"></option>
    {skills.map((key) => (
      <option key={key} value={key} data-i18n={`${key}-u`} />
    ))}
    <option disabled data-i18n="knowledges-u"></option>
    {knowledges.map((key) => (
      <option key={key} value={key} data-i18n={`${key}-u`} />
    ))}
    <option value={0} disabled>
      ---
    </option>
  </SelectInput>
);
