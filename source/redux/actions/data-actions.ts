import { ActionType } from "../actionTypes";
import { Artist } from "../../entities/artist";

export type DataAction = CacheArtists;

export type CacheArtists = {
    readonly type: ActionType.CACHE_ARTISTS;
    readonly artists: Artist[];
};
