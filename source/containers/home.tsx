import * as React from "react";
import { connect, MapStateToProps } from "react-redux";
import { RootStore } from "../redux/store/root";
import { Dispatcher } from "../redux/dispatcher";
import { Logout } from "../redux/action-creators/auth-action-creators";
import { SubmitButton } from "../components/form/submit-button";
import { ArtistsComponent } from "./artists";
import { FetchArtists } from "../redux/action-creators/data-action-creators";

type StateProps = {
    //isLoggedIn: boolean;
};

type DispatchProps = {
    logout: () => void;
    fetchArtists: () => void;
};

class Home extends React.PureComponent<StateProps & DispatchProps> {
    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        return (
            <div>
                <SubmitButton label="Logout" onClick={this.props.logout} />
                <ArtistsComponent />
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<
    StateProps,
    {},
    RootStore
> = store => ({});

const mapDispatchToProps = (dispatch: Dispatcher) => ({
    logout: () => dispatch(Logout),
    fetchArtists: () => dispatch(FetchArtists)
});

export const HomePage = connect<StateProps, DispatchProps, {}, RootStore>(
    mapStateToProps,
    mapDispatchToProps
)(Home);
