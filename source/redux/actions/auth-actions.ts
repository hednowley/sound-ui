import { ActionType } from "../actionTypes";

export type AuthAction = LoginAction | LogoutAction;

export type LoginAction = {
    readonly type: ActionType.LOGIN;
    readonly token: string;
};

export type LogoutAction = {
    readonly type: ActionType.LOGOUT;
};
