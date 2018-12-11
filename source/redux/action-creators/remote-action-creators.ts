import { ReturningAsyncThunk } from "../actions/all-actions";
import { SERVER } from "../../config";
import { Response } from "../../api-entities/response";

export const Get = (path: string): ReturningAsyncThunk<Response> => async (
    _dispatch,
    getState
) => {
    const response = await fetch(`${SERVER}/api/${path}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${getState().auth.token}`
        }
    });

    return (await response.json()) as Response;
};
