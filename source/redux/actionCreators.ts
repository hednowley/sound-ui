import { ActionType } from "./actionTypes";
import { AnyAction, ActionCreator } from "redux";

export interface SetTokenAction extends AnyAction {
	readonly type: ActionType.SET_TOKEN;
	readonly token: string;
}

export const newSetTokenAction: ActionCreator<SetTokenAction> = (token: string) => ({
	type: ActionType.SET_TOKEN,
	token: token
});