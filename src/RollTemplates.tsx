import "./RollTemplates.css";
import { range } from "ramda";

const makeDice = (i: number) =>
  `
{{#^rollLess() count ${i}}}
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
{{/^rollLess() count ${i}}}
`.trim();

export const RollTemplates = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
<rolltemplate class="sheet-rolltemplate-attribute">
  {{#rollLess() computed::result 1}}
    <span class="sheet-result sheet-result-result-is-zero"></span>
  {{/rollLess() computed::result 1}}
  {{#rollGreater() computed::fails 0}}
    <span class="sheet-result sheet-result-has-fails"></span>
  {{/rollGreater() computed::fails 0}}
  {{#rollGreater() computed::successes 0}}
    <span class="sheet-result sheet-result-has-success"></span>
  {{/rollGreater() computed::successes 0}}
  <div class="sheet-rollContainer">
    <div class="sheet-roll-layer sheet-dices">
    ${range(1, 16)
      .map((i) =>
        `
      <div>${makeDice(i * 2 - 1)}${makeDice(i * 2)}</div>
    `.trim()
      )
      .join("")}
    </div>
    <div class="sheet-roll-layer sheet-roll-info">
      <h3>{{name}}</h3>
      <h5>{{rollTitle}}</h5>
      <h5>{{difficultyLabel}}: <span class="sheet-info-difficulty">{{computed::difficulty}}</span></h5>
      <div class="sheet-regularResult">{{computed::result}}</div>
    </div>
  </div>
</rolltemplate>
<rolltemplate class="sheet-rolltemplate-wod">
    <div class="regularContainer">
        <div class="regularHeaderContainer">
            {{name}} rolls{{#roll_name}} {{roll_name}}{{/roll_name}}
        </div>
        <div class="regularAttr">
            {{#attr}} {{attr}}({{attr_num}}) {{/attr}}
        </div>
        <div class="regularAttr">
            {{#attr1}} {{attr1}}({{attr1_num}}) {{/attr1}}
        </div>
        <div class="regularAttr">
            {{#attr2}}
            + {{attr2}}({{attr2_num}}) {{/attr2}}
        </div>
        <div class="regularAttr">
            {{#skill}}
            + {{skill}}({{skill_num}})
            {{/skill}}
        </div>
        <div class="regularAttr">
            {{#pwr}}
            + {{pwr}}({{pwr_num}})
            {{/pwr}}
        </div>
        <div class="regularAttr">
            {{#mod_num}}
            + Modifiers({{mod_num}})
            {{/mod_num}}
        </div>
        <div class="regularAttr">
            {{#hp_mod}}
            + Wound({{hp_mod}})
            {{/hp_mod}}
        </div>
        <div>
            <div class="regularResult">{{result}} Successes</div>
        </div>
    </div>
</rolltemplate>
<rolltemplate class="sheet-rolltemplate-wodinitiative">
    <div class="initiativeContainer">
        <div class="initiativeHeader">
            {{name}} rolls{{#roll_name}}
            {{roll_name}}{{/roll_name}}
        </div>
        <div class="initiativeAttr">
            {{#attr}}
            {{attr}}({{attr_num}})
            {{/attr}}
        </div>
        <div class="initiativeAttr">
            {{#attr1}}
            {{attr1}}({{attr1_num}})
            {{/attr1}}
        </div>
        <div class="initiativeAttr">
            {{#attr2}}
            + {{attr2}}({{attr2_num}})
            {{/attr2}}
        </div>
        <div class="initiativeAttr">
            {{#skill}}
            + {{skill}}({{skill_num}})
            {{/skill}}
        </div>
        <div class="initiativeAttr">
            {{#pwr}}
            + {{pwr}}({{pwr_num}})
            {{/pwr}}
        </div>
        <div class="initiativeAttr">
            {{#mod_num}}
            + Modifiers({{mod_num}})
            {{/mod_num}}
        </div>
        <div class="initiativeAttr">
            {{#hp_mod}}
            + Wound({{hp_mod}})
            {{/hp_mod}}
        </div>
        <div>
            <div class="initiativeResult">{{result}} Initiative</div>
        </div>
    </div>
</rolltemplate>
<rolltemplate class="sheet-rolltemplate-wodritual">
    <div class="ritualcontainer">
        <div class="ritualheader">
            {{name}} casts {{#roll_name}}
            {{roll_name}}{{/roll_name}}
        </div>
        <div class="rituallevel">
            {{#rlevel}}
            {{rlevel}} {{rlevel_num}}
            {{/rlevel}}
        </div>
        <div class="ritualattribute">
            {{#attr}}
            {{attr}}({{attr_num}})
            {{/attr}}
        </div>
        <div class="ritualattribute">
            {{#attr1}}
            {{attr1}}({{attr1_num}})
            {{/attr1}}
        </div>
        <div class="ritualattribute">
            {{#attr2}}
            + {{attr2}}({{attr2_num}})
            {{/attr2}}
        </div>
        <div class="ritualattribute">
            {{#skill}}
            + {{skill}}({{skill_num}})
            {{/skill}}
        </div>
        <div class="ritualattribute">
            {{#pwr}}
            + {{pwr}}({{pwr_num}})
            {{/pwr}}
        </div>
        <div class="ritualattribute">
            {{#mod_num}}
            + Modifiers({{mod_num}})
            {{/mod_num}}
        </div>
        <div class="ritualattribute">
            {{#hp_mod}}
            + Wound({{hp_mod}})
            {{/hp_mod}}
        </div>
        <div class="ritualresult">{{result}} Successes</div>
        <div class="ritualdescription">
            {{#rdesc_text}}
            {{rdesc_text}}
            {{/rdesc_text}}
        </div>
        <div class="scrollbar">
            <div class="ritualbookpage">
                {{#rbp_text}}
                {{rbp_text}}
                {{/rbp_text}}
            </div>
        </div>
    </div>
</rolltemplate>
    `,
    }}
  />
);
