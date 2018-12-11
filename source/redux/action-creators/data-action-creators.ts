import { Thunk } from "../actions/all-actions";
import { Get } from "./remote-action-creators";
import { ArtistLight } from "../../api-entities/artistLight";
import { ActionType } from "../actionTypes";
import { MakeArtist } from "../../entities/artist";

export const FetchArtists: Thunk = async dispatch => {
    const response = await dispatch(Get("artist"));

    if (response.status != "success") {
        alert(response.data);
    }

    const data = response.data as {
        artists: ArtistLight[];
    };

    dispatch({
        type: ActionType.CACHE_ARTISTS,
        artists: data.artists.map(a => MakeArtist(a))
    });
};
