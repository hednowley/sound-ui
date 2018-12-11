import * as React from "react";
import { connect, MapStateToProps } from "react-redux";
import { RootStore } from "../redux/store/root";
import { Artist } from "../entities/artist";
import { Values } from "../utils/map-utils";

type StateProps = {
    artists: Map<number, Artist>;
};

class Component extends React.PureComponent<StateProps> {
    render() {
        return Values(this.props.artists).map(a => <div key={a.id}>{a.name}</div>);
    }
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootStore> = store => ({
    artists: store.data.artists
});

export const ArtistsComponent = connect<StateProps, {}, {}, RootStore>(
    mapStateToProps
)(Component);
