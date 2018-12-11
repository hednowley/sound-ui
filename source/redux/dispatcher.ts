import { ReduxAction } from "./actions/all-actions";
import { RootStore } from "./store/root";
import { ThunkDispatch } from "redux-thunk";

export type Dispatcher = ThunkDispatch<RootStore, {}, ReduxAction>;
