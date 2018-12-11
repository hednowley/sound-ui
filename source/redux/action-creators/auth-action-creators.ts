import { ActionType } from "../actionTypes";
import { Thunk } from "../actions/all-actions";
import { SERVER } from "../../config";
import { LoginAction, LogoutAction } from "../actions/auth-actions";
import { Response } from "../../api-entities/response";

export const Login = (token: string): LoginAction => ({
    type: ActionType.LOGIN,
    token: token
});

export const Logout: LogoutAction = {
    type: ActionType.LOGOUT
};

export const Authenticate = (
    username: string,
    password: string
): Thunk => async dispatch => {
    try {
        const response = await fetch(`${SERVER}/api/authenticate`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username, password: password })
        });

        if (response.status != 200) {
            // Break
        }

        const json = (await response.json()) as Response;
        console.log(json);

        if (json.status == "fail") {
            alert(json.data);
        }

        if (json.status == "success") {
            dispatch(Login(json.data.token));
        }
    } catch (error) {
        // dispatch({});
    }
};
