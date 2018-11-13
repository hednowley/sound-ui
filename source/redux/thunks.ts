import { ThunkAction } from "redux-thunk";
import { State } from "./store";
import { server } from "../config";
import { newSetTokenAction } from "./actionCreators";
import { ActionCreator } from "redux";
import { Action } from "./actions";
import { Response } from "../api/response";

type ThunkCreator = ActionCreator<ThunkAction<{}, State, {}, Action>>;

export const newLoginThunk: ThunkCreator = (
  username: string,
  password: string
) => {
  return async dispatch => {
    try {
      const response = await fetch(`${server}/api/authenticate`, {
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
        dispatch(newSetTokenAction(json.data.token));
      }
    } catch (error) {
      // dispatch({});
    }
  };
};
