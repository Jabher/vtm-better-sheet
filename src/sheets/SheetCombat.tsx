export const SheetCombat = () => <div className="sheet-colrow sheet-tab-content sheet-tabCombat">
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
                <span className="sheet-text-fronth1" data-i18n="meleeweapons-u">
                  Melee Weapons
                </span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div>
        <div className="sheet-col" style={{width: "38%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="name2-u">
                Name
            </h5>
        </div>
        <div className="sheet-col" style={{width: "10%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="type-u">
                Type
            </h5>
        </div>
        <div className="sheet-col" style={{width: "9%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="minstr-u">
                Min Str.
            </h5>
        </div>
        <div className="sheet-col" style={{width: "8%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="damage-u">
                Damage
            </h5>
        </div>
        <div className="sheet-col" style={{width: "12%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="lethality-u">
                Lethality
            </h5>
        </div>
        <div className="sheet-col" style={{width: "8%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="conceal-u">
                Conceal
            </h5>
        </div>
        <div className="sheet-col" style={{width: "5%"}}></div>
        <fieldset
            name="attr_repeating_MeleeWeapons"
            className="repeating_MeleeWeapons"
        >
            <div className="sheet-col" style={{width: "38%"}}>
                <input
                    type="text"
                    name="attr_MeleeWeaponName"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <input
                    type="text"
                    name="attr_MeleeWeaponType"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "9%"}}>
                <input
                    type="number"
                    name="attr_MeleeWeaponMinimumStrength"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "8%"}}>
                <input
                    type="number"
                    name="attr_MeleeWeaponDamage"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "12%"}}>
                <select
                    className="sheet-center-select"
                    name="attr_MeleeWeaponLethality"
                >
                    <option value={0} data-i18n="bashing-u">
                        Bashing
                    </option>
                    <option value={2} selected="" data-i18n="lethal-u">
                        Lethal
                    </option>
                    <option value={3} data-i18n="aggravated-u">
                        Aggravated
                    </option>
                </select>
            </div>
            <div className="sheet-col" style={{width: "8%"}}>
                <input
                    type="text"
                    name="attr_MeleeWeaponConceal"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <input
                type="checkbox"
                className="sheet-arrow"
                name="attr_MeleeWeaponDescHide"
            />
            <span/>
            <div className="sheet-body">
                <b>Notes:</b>
                <input
                    type="text"
                    name="attr_MeleeWeaponDesc"
                    className="sheet-binput"
                    style={{width: "70%"}}
                />
            </div>
        </fieldset>
    </div>
    <br/>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
                <span
                    className="sheet-text-fronth1"
                    data-i18n="rangedweapons-u"
                >
                  Ranged Weapons
                </span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <br/>
    <div>
        <div className="sheet-col" style={{width: "27%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="name2-u">
                Name
            </h5>
        </div>
        <div className="sheet-col" style={{width: "7%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="type-u">
                Type
            </h5>
        </div>
        <div className="sheet-col" style={{width: "7%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="minstr-u">
                Min Str.
            </h5>
        </div>
        <div className="sheet-col" style={{width: "8%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="damage-u">
                Damage
            </h5>
        </div>
        <div className="sheet-col" style={{width: "12%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="lethality-u">
                Lethality
            </h5>
        </div>
        <div className="sheet-col" style={{width: "7%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="range-u">
                Range
            </h5>
        </div>
        <div className="sheet-col" style={{width: "7%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="rate-u">
                Rate
            </h5>
        </div>
        <div className="sheet-col" style={{width: "7%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="clip-u">
                Clip
            </h5>
        </div>
        <div className="sheet-col" style={{width: "8%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="conceal-u">
                Conceal
            </h5>
        </div>
        <div className="sheet-col" style={{width: "5%"}}></div>
        <fieldset
            name="attr_repeating_RangedWeapons"
            className="repeating_RangedWeapons"
        >
            <div className="sheet-col" style={{width: "27%"}}>
                <input
                    type="text"
                    name="attr_RangedWeaponName"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "7%"}}>
                <input
                    type="text"
                    name="attr_RangedWeaponType"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "7%"}}>
                <input
                    type="text"
                    name="attr_RangedWeaponMinimumStrength"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "8%"}}>
                <input
                    type="number"
                    name="attr_RangedWeaponDamage"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "12%"}}>
                <select
                    className="sheet-center-select"
                    name="attr_RangedWeaponLethality"
                >
                    <option value={0} data-i18n="bashing-u">
                        Bashing
                    </option>
                    <option value={2} selected="" data-i18n="lethal-u">
                        Lethal
                    </option>
                    <option value={3} data-i18n="aggravated-u">
                        Aggravated
                    </option>
                </select>
            </div>
            <div className="sheet-col" style={{width: "7%"}}>
                <input
                    type="text"
                    name="attr_RangedWeaponRange"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "7%"}}>
                <input
                    type="text"
                    name="attr_RangedWeaponRate"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "7%"}}>
                <input
                    type="text"
                    name="attr_RangedWeaponClip"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "8%"}}>
                <input
                    type="text"
                    name="attr_RangedWeaponConceal"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <input
                type="checkbox"
                className="sheet-arrow"
                name="attr_RangedWeaponDescHide"
            />
            <span/>
            <div className="sheet-body">
                <b data-i18n="notes-u">Notes:</b>
                <input
                    type="text"
                    name="attr_RangedWeaponDesc"
                    className="sheet-binput"
                    style={{width: "70%"}}
                />
            </div>
        </fieldset>
    </div>
    <br/>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
                <span className="sheet-text-fronth1" data-i18n="armorshields-u">
                  Armor &amp; Shields
                </span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <br/>
    <div>
        <div className="sheet-col" style={{width: "4%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="onq-u">
                On?
            </h5>
        </div>
        <div className="sheet-col" style={{width: "29%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="name2-u">
                Name
            </h5>
        </div>
        <div className="sheet-col" style={{width: "12%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="type-u">
                Type
            </h5>
        </div>
        <div className="sheet-col" style={{width: "12%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="class-u">
                Class
            </h5>
        </div>
        <div className="sheet-col" style={{width: "7%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="rating-u">
                Rating
            </h5>
        </div>
        <div className="sheet-col" style={{width: "7%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="penalty-u">
                Penalty
            </h5>
        </div>
        <div className="sheet-col" style={{width: "10%"}}>
            <h5 style={{textAlign: "center"}} data-i18n="aggravatedq-u">
                Aggravated?
            </h5>
        </div>
        <div className="sheet-col" style={{width: "5%"}}></div>
        <fieldset
            name="attr_repeating_rangeadattacks"
            className="repeating_RangedAttacks"
        >
            <div className="sheet-col" style={{width: "4%"}}>
                <input
                    type="checkbox"
                    className="sheet-APIcheck"
                    name="attr_WearingArmor"
                />
                <span/>
            </div>
            <div className="sheet-col" style={{width: "29%"}}>
                <input
                    type="text"
                    name="attr_ArmorName"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "12%"}}>
                <select
                    className="sheet-center-select"
                    name="attr_ArmorType"
                >
                    <option value={1} selected="" data-i18n="armor-u">
                        Armor
                    </option>
                    <option value={2} data-i18n="shield-u">
                        Shield
                    </option>
                    <option value={3} data-i18n="bodymod-u">
                        Body Mod.
                    </option>
                    <option value={3} data-i18n="other-u">
                        Other
                    </option>
                </select>
            </div>
            <div className="sheet-col" style={{width: "12%"}}>
                <input
                    type="text"
                    name="attr_ArmorClass"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "7%"}}>
                <input
                    type="number"
                    name="attr_ArmorRating"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "7%"}}>
                <input
                    type="number"
                    name="attr_ArmorPenalty"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <select
                    className="sheet-center-select"
                    name="attr_ArmorAgainstAggravated"
                >
                    <option value={0} selected="" data-i18n="no-u">
                        No
                    </option>
                    <option value={1} data-i18n="yes-u">
                        Yes
                    </option>
                </select>
            </div>
            <input
                type="checkbox"
                className="sheet-arrow"
                name="attr_ArmorDescHide"
            />
            <span/>
            <div className="sheet-body">
                <b data-i18n="notes-u">Notes:</b>
                <input
                    type="text"
                    name="attr_ArmorDesc"
                    className="sheet-binput"
                    style={{width: "70%"}}
                />
            </div>
        </fieldset>
    </div>
    <br/>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
                <span className="sheet-text-fronth1" data-i18n="gear-u">
                  Gear
                </span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <div
        className="sheet-col"
        style={{width: "95%", height: "100%", textAlign: "center"}}
    >
                <textarea
                    name="attr_gear"
                    className="sheet-gear"
                    defaultValue={""}
                />
    </div>
    <br/>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Vehicles</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <br/>
    <fieldset
        name="attr_repeating_vehicles"
        className="repeating_Vehicles"
    >
        <div>
            <div className="sheet-col" style={{width: "20%"}}>
                <h5 style={{textAlign: "center"}}>Vehicle</h5>
            </div>
            <div className="sheet-col" style={{width: "12%"}}>
                <h5 style={{textAlign: "center"}}>Type</h5>
            </div>
            <div className="sheet-col" style={{width: "12%"}}>
                <h5 style={{textAlign: "center"}}>Safe Speed</h5>
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <h5 style={{textAlign: "center"}}>Max Speed</h5>
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <h5 style={{textAlign: "center"}}>Maneuver</h5>
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <h5 style={{textAlign: "center"}}>Passengers</h5>
            </div>
            <div className="sheet-col" style={{width: "5%"}}>
                <h5 style={{textAlign: "center"}} data-i18n="notes-u">
                    Notes
                </h5>
            </div>
            <div className="sheet-col" style={{width: "20%"}}>
                <input
                    type="text"
                    name="attr_ArmorName"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "12%"}}>
                <select
                    className="sheet-center-select"
                    name="attr_VehicleType"
                >
                    <option selected="">Car</option>
                    <option>Airplane</option>
                    <option>Boat</option>
                    <option>Motorcycle</option>
                    <option>Truck</option>
                    <option>Tank</option>
                    <option>Semi</option>
                    <option>Utility Vehicle</option>
                </select>
            </div>
            <div className="sheet-col" style={{width: "12%"}}>
                <input
                    type="text"
                    name="attr_SafeSpeed"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <input
                    type="text"
                    name="attr_MaxSpeed"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <input
                    type="number"
                    name="attr_Maneuver"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <input
                    type="number"
                    name="attr_Passengers"
                    defaultValue={0}
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <input
                type="checkbox"
                className="sheet-arrow"
                name="attr_VehicleDescHide"
            />
            <span/>
            <div className="sheet-body">
                    <textarea
                        name="attr_VehicleDesc"
                        className="sheet-binput"
                        style={{width: "70%", height: 150}}
                        defaultValue={""}
                    />
            </div>
        </div>
    </fieldset>
    <br/>
    <br/>
    <br/>
    <div
        className="sheet-col"
        style={{width: "100%", textAlign: "center"}}
    >
        <span className="sheet-text-fronth1">Havens</span>
    </div>
    <div className="sheet-line-behind"/>
    <br/>
    <br/>
    <fieldset
        name="attr_repeating_havens"
        className="repeating_havens"
    >
        <div>
            <div
                className="sheet-col"
                style={{width: "25%", paddingLeft: 39}}
            >
                <h5 style={{textAlign: "center"}}>Name</h5>
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <h5 style={{textAlign: "center"}}>Luxury</h5>
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <h5 style={{textAlign: "center"}}>Size</h5>
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <h5 style={{textAlign: "center"}}>Security</h5>
            </div>
            <div
                className="sheet-col"
                style={{width: "10%", paddingRight: 15}}
            >
                <h5 style={{textAlign: "center"}} data-i18n="notes-u">
                    Notes
                </h5>
            </div>
            <br/>
            <div className="sheet-col" style={{width: "25%"}}>
                <input
                    type="text"
                    name="attr_HavenName"
                    style={{width: "100%"}}
                    className="sheet-binput"
                />
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <select className="sheet-dots" name="attr_Luxuryrating">
                    <option value={0} selected="">
                        ⚪⚪⚪⚪⚪
                    </option>
                    <option value={1}>⚫⚪⚪⚪⚪</option>
                    <option value={2}>⚫⚫⚪⚪⚪</option>
                    <option value={3}>⚫⚫⚫⚪⚪</option>
                    <option value={4}>⚫⚫⚫⚫⚪</option>
                    <option value={5}>⚫⚫⚫⚫⚫</option>
                    <option value={6}>⚫ 6</option>
                    <option value={7}>⚫ 7</option>
                    <option value={8}>⚫ 8</option>
                    <option value={9}>⚫ 9</option>
                    <option value={10}>⚫ 10</option>
                </select>
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <select className="sheet-dots" name="attr_Sizerating">
                    <option value={0} selected="">
                        ⚪⚪⚪⚪⚪
                    </option>
                    <option value={1}>⚫⚪⚪⚪⚪</option>
                    <option value={2}>⚫⚫⚪⚪⚪</option>
                    <option value={3}>⚫⚫⚫⚪⚪</option>
                    <option value={4}>⚫⚫⚫⚫⚪</option>
                    <option value={5}>⚫⚫⚫⚫⚫</option>
                    <option value={6}>⚫ 6</option>
                    <option value={7}>⚫ 7</option>
                    <option value={8}>⚫ 8</option>
                    <option value={9}>⚫ 9</option>
                    <option value={10}>⚫ 10</option>
                </select>
            </div>
            <div className="sheet-col" style={{width: "10%"}}>
                <select className="sheet-dots" name="attr_Securityrating">
                    <option value={0} selected="">
                        ⚪⚪⚪⚪⚪
                    </option>
                    <option value={1}>⚫⚪⚪⚪⚪</option>
                    <option value={2}>⚫⚫⚪⚪⚪</option>
                    <option value={3}>⚫⚫⚫⚪⚪</option>
                    <option value={4}>⚫⚫⚫⚫⚪</option>
                    <option value={5}>⚫⚫⚫⚫⚫</option>
                    <option value={6}>⚫ 6</option>
                    <option value={7}>⚫ 7</option>
                    <option value={8}>⚫ 8</option>
                    <option value={9}>⚫ 9</option>
                    <option value={10}>⚫ 10</option>
                </select>
            </div>
            <b/>
            <input
                type="checkbox"
                className="sheet-arrow"
                name="attr_HavenDescHide"
            />
            <span/>
            <div className="sheet-body">
                    <textarea
                        name="attr_HavenDesc"
                        className="sheet-binput"
                        style={{width: "70%", height: 150}}
                        defaultValue={""}
                    />
            </div>
        </div>
    </fieldset>
</div>
