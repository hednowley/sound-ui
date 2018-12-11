import { ActionType } from "../actionTypes";
import { AuthStore, Initial } from "../store/auth";
import { ReduxAction } from "../actions/all-actions";

export const authReducer = (
    store: AuthStore = Initial,
    action: ReduxAction
): AuthStore => {
    switch (action.type) {
        case ActionType.SET_TOKEN: {
            console.log(action.token);
            return {
                ...store,
                Token: action.token
            };
        }

        default:
            return store;
    }
};
