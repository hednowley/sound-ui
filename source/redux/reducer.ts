import { State } from "./store";
import { Action } from "./actions";
import { ActionType } from "./actionTypes";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_TOKEN: {
      console.log(action.token)
      return {
        ...state,
        Token: action.token
      };
    }
  }
};
