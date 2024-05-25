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

const dices = `<div class="sheet-roll-layer sheet-dices">
    ${range(1, 16)
      .map((i) => `<div>${makeDice(i * 2 - 1)}${makeDice(i * 2)}</div>`.trim())
      .join("")}
    <span class="sheet-roll-bonus">{{diceBonus}}</span>
    </div>`;

const rollFlags = `
{{#rollLess() computed::result 1}}
  <span class="sheet-result sheet-result-result-is-zero"></span>
{{/rollLess() computed::result 1}}
{{#rollGreater() computed::fails 0}}
  <span class="sheet-result sheet-result-has-fails"></span>
{{/rollGreater() computed::fails 0}}
{{#rollGreater() computed::successes 0}}
  <span class="sheet-result sheet-result-has-success"></span>
{{/rollGreater() computed::successes 0}}
{{#rollGreater() connected 0}}
  <span class="sheet-result sheet-result-result-is-connected"></span>
{{/rollGreater() connected 0}}
`;

// todo damage roll with "soak" button (considering armor)

export const RollTemplates = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
<rolltemplate class="sheet-rolltemplate-attribute">
  ${rollFlags}
  <div class="sheet-rollContainer">
    ${dices}
    <div class="sheet-roll-layer sheet-roll-info">
      <h3>{{name}}</h3>
      <h5>{{rollTitle}}</h5>
      <h5>{{difficultyLabel}}: <span class="sheet-info-difficulty">{{computed::difficulty}}</span></h5>
      <div class="sheet-regularResult">{{computed::result}}</div>
    </div>
  </div>
</rolltemplate>
<rolltemplate class="sheet-rolltemplate-combat">
  ${rollFlags}
  <div class="sheet-rollContainer">
    ${dices}
    <div class="sheet-roll-layer sheet-roll-info">
      <h3>{{name}}</h3>
      <h5>{{rollTitle}}</h5>
      <h5>{{difficultyLabel}}: <span class="sheet-info-difficulty">{{computed::difficulty}}</span></h5>
      <div class="sheet-regularResult">{{computed::result}}</div>
    </div>
  </div>
</rolltemplate>
<rolltemplate class="sheet-rolltemplate-damage">
  ${rollFlags}
  <div class="sheet-rollContainer">
    ${dices}
    <div class="sheet-roll-layer sheet-roll-info">
      <h5>{{rollTitle}}</h5>
      <div class="sheet-regularResult">{{computed::result}}</div>
    </div>
  </div>
</rolltemplate>
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
