import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { RootStore } from "../store/root";
import { ReduxAction } from "../actions/all-actions";
import { dataReducer } from "./data-reducer";

type Reducers = {
    [K in keyof RootStore]: (
        store: RootStore[K],
        action: ReduxAction
    ) => RootStore[K]
};

const reducers: Reducers = {
    auth: authReducer,
    data: dataReducer
};

export const rootReducer = combineReducers(reducers);
