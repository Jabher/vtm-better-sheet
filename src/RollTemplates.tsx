import "./RollTemplates.css";
import { range } from "ramda";

const makeDice = (i: number) =>
  `
{{#^rollLess() computed::count ${i}}}
  {{#rollLess() computed::dice${i} 2}}
    <span class="sheet-result sheet-result-critical-fail"></span>
  {{/rollLess() computed::dice${i} 2}}
  {{#^rollLess() computed::dice${i} computed::difficulty}}
    <span class="sheet-result sheet-result-success"></span>
  {{/^rollLess() computed::dice${i} computed::difficulty}}
  {{#rollGreater() computed::dice${i} 9}}
    <span class="sheet-result sheet-result-critical-success"></span>
  {{/rollGreater() computed::dice${i} 9}}
  <div class="sheet-dice">
  {{computed::dice${i}}}
  </div>
{{/^rollLess() computed::count ${i}}}
`.trim();

const dices = (limit: number) => `<div class="sheet-roll-layer sheet-dices">
    ${range(1, Math.ceil(limit / 2) + 1)
      .map((i) => `<div>${makeDice(i * 2 - 1)}${makeDice(i * 2)}</div>`.trim())
      .join("")}
    <span class="sheet-roll-bonus">{{diceBonus}}</span>
    </div>`;

// todo damage roll with "soak" button (considering armor)

const attributeTemplate = `
<div class="sheet-roll-layer sheet-roll-info">
  <h3>{{name}}</h3>
  <h5>{{rollTitle}}</h5>
  <h5>{{difficultyLabel}}: <span class="sheet-info-difficulty">{{computed::difficulty}}</span></h5>
  <div class="sheet-regularResult">{{computed::result}}</div>
</div>`;

const combatTemplate = `
<div class="sheet-roll-layer sheet-roll-info">
  <h3>{{name}}</h3>
  <h5>{{rollTitle}}</h5>
  <h5>{{difficultyLabel}}: <span class="sheet-info-difficulty">{{computed::difficulty}}</span></h5>
  <div class="sheet-regularResult">{{computed::result}}</div>
</div>
`;

const damageTemplate = `
<div class="sheet-roll-layer sheet-roll-info">
  <h5>{{rollTitle}}</h5>
  <div class="sheet-regularResult">{{computed::result}}</div>
</div>`;

const template = (type: string, maxDice: number, contents: string) => `
<rolltemplate class="sheet-rolltemplate-${type}">
  <div class="sheet-rollContainer">
    {{#rollLess() computed::result 1}}
    <span class="sheet-result sheet-result-internal sheet-result-result-is-zero">z</span>
    {{/rollLess() computed::result 1}}
    {{#rollGreater() computed::fails 0}}
    <span class="sheet-result sheet-result-internal sheet-result-has-fails">z</span>
    {{/rollGreater() computed::fails 0}}
    {{#rollGreater() computed::successes 0}}
    <span class="sheet-result sheet-result-internal sheet-result-has-success">z</span>
    {{/rollGreater() computed::successes 0}}
    {{#rollGreater() connected 0}}
    <span class="sheet-result sheet-result-internal sheet-result-result-is-connected">z</span>
    {{/rollGreater() connected 0}}

    ${dices(maxDice)}
    ${contents}
  </div>
</rolltemplate>
`;

export const RollTemplates = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
${template("attribute", 50, attributeTemplate)}
${template("combat", 50, combatTemplate)}
${template("damage", 50, damageTemplate)}

<rolltemplate class="sheet-rolltemplate-initiative">
  <div class="sheet-rollContainer">
    <div class="sheet-roll-layer sheet-dices">
      <div class="sheet-initiative">{{result}}</div>
    </div>
    <div class="sheet-roll-layer sheet-roll-info">
      <h5>{{name}}</h5>
      <h3>{{roll_name}}</h3>
    </div>
  </div>
</rolltemplate>
    `,
    }}
  />
);
