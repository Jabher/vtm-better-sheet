export class WorkerLogicBase {
  dependencies = {};
  repeatingDefaults = {};

  init(cb) {
    cb();
  }

  initFirstTime(cb) {
    cb();
  }

  constructor() {
    console.debug("initializing worker", this);
    on("sheet:opened", (e) => {
      console.debug("sheet opened", e);
      getAttrs(["V20_Initialized"], ({ V20_Initialized }) => {
        console.debug("V20_Initialized", V20_Initialized);
        // noinspection EqualityComparisonWithCoercionJS
        if (!V20_Initialized || V20_Initialized == "0") {
          console.debug("initializing worker first load");
          this.initFirstTime(() => {
            setAttrs({
              V20_Initialized: true,
            });
            console.debug("initializing worker listeners");
            this._initInternal();
          });
        } else {
          console.debug("initializing worker listeners");
          this._initInternal();
        }
      });
    });
  }

  _initInternalDependency(propkey, getter, discoveredDependencies, cb) {
    // noinspection LoopStatementThatDoesntLoopJS
    try {
      console.debug("computing value", propkey, getter);
      const value = getter(
        new Proxy(
          {},
          {
            get: (_, key) => {
              if (key in discoveredDependencies) {
                console.debug("got already used dependency", propkey, key, discoveredDependencies[key]);
                return discoveredDependencies[key];
              }
              console.debug("got new dependency", propkey, key);
              getAttrs([key], (attrs) => {
                discoveredDependencies[key] = attrs[key];
                this._initInternalDependency(propkey, getter, discoveredDependencies, cb);
              });
              throw new Error("NotError: HookRevert");
            },
          }
        )
      );
      console.debug("computed value", propkey, value, discoveredDependencies);
      cb(value, Object.keys(discoveredDependencies));
    } catch (e) {
      if (e.message !== "NotError: HookRevert") console.debug(e);
    }
  }

  _initInternalDependencies(cb) {
    const dependencyKeys = {};
    const remainingDepedencies = new Set(Object.keys(this.dependencies));
    for (const [key, getter] of Object.entries(this.dependencies)) {
      console.debug("anaylyzing dependency", key, getter);
      this._initInternalDependency(key, getter, {}, (value, dependencies) => {
        console.debug("discovered dependencyKeys", key, getter, value, dependencies);
        dependencyKeys[key] = [...dependencies];
        getAttrs(["key"], ({ [key]: oldValue }) => {
          if (oldValue === "") {
            setAttrs({
              [key]: value,
            });
          }

          remainingDepedencies.delete(key);
          if (remainingDepedencies.size > 0) {
            console.debug("analyzed", key, "remaining", [...remainingDepedencies]);
            return;
          }
          console.debug("analyzed last dependency", key);
          console.debug("analyzed all dependencies", dependencyKeys);
          // eslint-disable-next-line @typescript-eslint/no-shadow
          for (const [key, dependencies] of Object.entries(dependencyKeys)) {
            console.debug("registering", key, dependencies);
            on(dependencies.map((p) => `change:${p}`).join(" "), (_e) => {
              getAttrs(dependencies, (attrs) => {
                const result = this.dependencies[key](attrs);
                console.debug("doing autocalc", key, dependencies, attrs, result);
                if (result !== undefined)
                  setAttrs({
                    [key]: Number.isNaN(result) ? " " : result,
                  });
              });
            });
          }

          cb();
        });
      });
    }
  }

  _initRepeaters() {
    for (const [key, triggers] of Object.entries(this.repeatingDefaults)) {
      for (const [triggerKey, fn] of Object.entries(triggers)) {
        console.debug("registering repeater", key, triggerKey);
        on(`change:repeating_${key}:${triggerKey}`, (eventInfo) => {
          const [_, group, groupId] = eventInfo.sourceAttribute.split("_");
          const prefix = `repeating_${group}_${groupId}`;
          const result = fn(eventInfo.newValue);
          if (result) {
            const newAttrs = Object.fromEntries(
              Object.entries(result).map(([key2, value]) => [`${prefix}_${key2}`, value])
            );
            console.debug("updating repeating key for", key, {
              triggerKey,
              result,
              eventInfo,
              prefix,
              newAttrs,
            });
            setAttrs(newAttrs);
          } else {
            console.debug("updating repeating key failed for", key, {
              triggerKey,
              result,
              eventInfo,
              prefix,
            });
          }
        });
      }
    }
  }

  _initInternal() {
    this._initInternalDependencies(() => {
      this._initRepeaters();
      this.init();
    });
  }
}
