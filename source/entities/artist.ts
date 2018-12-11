import { ArtistLight } from "../api-entities/artistLight";

export type Artist = {
    id: number;
    name: string;
};

export const MakeArtist = (light: ArtistLight): Artist => ({
    id: light.id,
    name: light.name
});
