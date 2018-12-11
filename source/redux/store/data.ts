import { Artist } from "../../entities/artist";

export interface DataStore {
    artists: Map<number, Artist>;
}

export const Initial: DataStore = {
    artists: new Map()
};
