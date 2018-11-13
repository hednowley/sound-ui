import { ThunkAction } from "redux-thunk";
import { State } from "./store";
import { server } from "../config";
import { newSetTokenAction } from "./actionCreators";
import { ActionCreator } from "redux";
import { Action } from "./actions";

type ThunkCreator = ActionCreator<ThunkAction<{}, State, {}, Action>>

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

      const token = await response.text();
      dispatch(newSetTokenAction(token));
    } catch (error) {
      // dispatch({});
    }
  };
};
