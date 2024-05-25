export class WorkerLogic {
    dependencies = {}
    repeatingDefaults = {}

    init(cb) {
        cb();
    }

    constructor() {
        console.debug('initializing worker', this);
        on('sheet:opened', async (e) => {
            console.debug('sheet opened', e);
            getAttrs(['V20_NotInitialized'], ({V20_NotInitialized}) => {
                console.debug("V20_NotInitialized", V20_NotInitialized);
                if (V20_NotInitialized) {
                    console.debug('initializing worker first load');
                    this.init(() => {
                        setAttrs({
                            notInitialized: false,
                        });
                        console.debug('initializing worker listeners');
                        this._initInternal();
                    });
                } else {
                    console.debug('initializing worker listeners');
                    this._initInternal();
                }
            });
        })
    }

    _initInternalDependency(propkey, getter, discoveredDependencies, cb) {
        // noinspection LoopStatementThatDoesntLoopJS
        try {
            console.debug('computing value', propkey, getter);
            const value = getter(new Proxy({}, {
                get: (target, key) => {
                    if (discoveredDependencies[key]) {
                        console.debug('got already used dependency', propkey, key, discoveredDependencies[key]);
                        return discoveredDependencies[key];
                    }
                    console.debug('got new dependency', propkey, key);
                    getAttrs([key], (attrs) => {
                        discoveredDependencies[key] = attrs[key];
                        this._initInternalDependency(propkey, getter, discoveredDependencies, cb);
                    });
                    throw new Error('NotError: HookRevert');
                }
            }));
            console.debug('computed value', propkey, value, discoveredDependencies);
            cb(value, Object.keys(discoveredDependencies));
        } catch (e) {
            if (e.message !== 'NotError: HookRevert')
                console.debug(e)
        }
    }

    _initInternalDependencies(cb) {
        const dependencyKeys = {}
        const remainingDepedencies = new Set(Object.keys(this.dependencies));
        for (const [key, getter] of Object.entries(this.dependencies)) {
            console.debug('anaylyzing dependency', key, getter);
            this._initInternalDependency(key, getter, {}, (value, dependencies) => {
                console.debug('discovered dependencyKeys', key, getter, value, dependencies);
                dependencyKeys[key] = [...dependencies];
                setAttrs({
                    [key]: value
                });

                remainingDepedencies.delete(key);
                console.debug('analyzed', key, 'remaining', [...remainingDepedencies])
                if (remainingDepedencies.size !== 0) {
                    return;
                }
                console.debug('analyzed all dependencies', dependencyKeys);
                for (const [key, dependencies] of Object.entries(dependencyKeys)) {
                    console.debug('registering', key, dependencies)
                    on(dependencies.map((p) => `change:${p}`).join(" "), (e) => {
                        getAttrs(dependencies, (attrs) => {
                            console.debug('doing autocalc', dependencies, attrs, this.dependencies[key](attrs))
                            setAttrs({
                                [key]: this.dependencies[key](attrs)
                            });
                        });
                    });
                }

                cb();
            });
        }
    }

    _initRepeaters() {
        for (const [key, triggers] of Object.entries(this.repeatingDefaults)) {
            for (const [triggerKey, fn] of Object.entries(triggers)) {
                console.debug('registering repeater', key, triggerKey);
                on(`change:repeating_${key}:${triggerKey}`, (eventInfo) => {
                    const prefix = eventInfo.sourceAttribute.replace(new RegExp('_' + triggerKey + '$', 'i'), "");
                    const result = fn(eventInfo.newValue);
                    console.debug('updating repeating key for', key, triggerKey, eventInfo.newValue, result);
                    if (result) {
                        setAttrs(Object.fromEntries(
                            Object.toEntries(result)
                                .map(([key, value]) => [`${prefix}${key}`, value])
                        ))
                    }
                });
            }
        }
    }

    _initInternal() {
        this._initInternalDependencies(() => {
            this._initRepeaters();
        })
    }
}
