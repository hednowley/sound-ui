import { AuthAction } from "./auth-actions";
import { ThunkAction } from "redux-thunk";
import { RootStore } from "../store/root";

export type ReduxAction = AuthAction;

/**
 * Any action which can dispatch direct actions to the Redux store.
 */
export type Thunk = ThunkAction<void, RootStore, {}, ReduxAction>;

/**
 * Any action which can dispatch direct actions to the Redux store and returns a value.
 */
export type ReturningThunk<T> = ThunkAction<T, RootStore, {}, ReduxAction>;

/**
 * Any action which can dispatch direct actions to the Redux store and returns a promise.
 */
export type ReturningAsyncThunk<T> = ThunkAction<
    Promise<T>,
    RootStore,
    {},
    ReduxAction
>;
