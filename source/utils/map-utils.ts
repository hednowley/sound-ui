export const Max = (iter: IterableIterator<number>) => {
    let max: number;
    for (const i of iter) {
        if (max == null || i > max) {
            max = i;
        }
    }
    return max ? max : 0;
};

export const Values = <T>(map: Map<any, T>) => {
    const values: T[] = [];
    for (const value of map.values()) {
        values.push(value);
    }
    return values;
};

export const Keys = <T>(map: Map<T, any>) => {
    const keys: T[] = [];
    for (const key of map.keys()) {
        keys.push(key);
    }
    return keys;
};

export const Entries = <T, U>(map: Map<T, U>) => {
    const entries: [T, U][] = [];
    for (const e of map.entries()) {
        entries.push(e);
    }
    return entries;
};
