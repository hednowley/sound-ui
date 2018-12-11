import { ActionType } from "../actionTypes";
import { ReduxAction } from "../actions/all-actions";
import { DataStore, Initial } from "../store/data";
import { Artist } from "../../entities/artist";

export const dataReducer = (
    store: DataStore = Initial,
    action: ReduxAction
): DataStore => {
    switch (action.type) {
        case ActionType.CACHE_ARTISTS: {
            return {
                ...store,
                artists: new Map(
                    action.artists.map(a => [a.id, a] as [number, Artist])
                )
            };
        }

        default:
            return store;
    }
};
