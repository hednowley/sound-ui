import { ActionType } from "../actionTypes";
import { AuthStore, Initial } from "../store/auth";
import { ReduxAction } from "../actions/all-actions";

export const authReducer = (
    store: AuthStore = Initial,
    action: ReduxAction
): AuthStore => {
    switch (action.type) {
        case ActionType.LOGIN: {
            return {
                ...store,
                isLoggedIn: true,
                token: action.token
            };
        }

        case ActionType.LOGOUT: {
            return {
                ...store,
                isLoggedIn: false,
                token: null
            };
        }

        default:
            return store;
    }
};
