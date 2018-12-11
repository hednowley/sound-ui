import { Entries } from "./map-utils";

// A random string that shouldn't collide with anything else...
const mapFingerprint = "OhC4K6m8lHkizASp3edl";

/**
 * Serialises a JS object into a custom format which preserves Maps.
 */
export const serialise = (data: any) =>
    JSON.stringify(
        data,
        (key: string, value: any): any => {
            if (value instanceof Map) {
                return {
                    fingerprint: mapFingerprint,
                    entries: Entries(value)
                };
            }
            return value;
        }
    );

/**
 * Deserialises a string from a custom serialisation format which preserves Maps.
 */
export const deserialise = (serial: string) =>
    JSON.parse(
        serial,
        (key: string, value: any): any => {
            if (
                value &&
                typeof value === "object" &&
                value.fingerprint === mapFingerprint
            ) {
                return new Map(value.entries);
            }
            return value;
        }
    );
