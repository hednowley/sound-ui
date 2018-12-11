import { ActionType } from "../actionTypes";

export type AuthAction = SetTokenAction;

export type SetTokenAction = {
    readonly type: ActionType.SET_TOKEN;
    readonly token: string;
};
