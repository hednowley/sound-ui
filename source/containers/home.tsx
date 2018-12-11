import * as React from "react";
import { connect, MapStateToProps } from "react-redux";
import { RootStore } from "../redux/store/root";
import { Dispatcher } from "../redux/dispatcher";
import { Logout } from "../redux/action-creators/auth-action-creators";
import { SubmitButton } from "../components/form/submit-button";

type StateProps = {
    //isLoggedIn: boolean;
};

type DispatchProps = {
    logout: () => void;
};

class Home extends React.PureComponent<StateProps & DispatchProps> {
    render() {
        return <SubmitButton label="Logout" onClick={this.props.logout} />;
    }
}

const mapStateToProps: MapStateToProps<
    StateProps,
    {},
    RootStore
> = store => ({});

const mapDispatchToProps = (dispatch: Dispatcher) => ({
    logout: () => dispatch(Logout)
});

export const HomePage = connect<StateProps, DispatchProps, {}, RootStore>(
    mapStateToProps,
    mapDispatchToProps
)(Home);
