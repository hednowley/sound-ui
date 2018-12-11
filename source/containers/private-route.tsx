import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { MapStateToProps, connect } from "react-redux";
import { RootStore } from "../redux/store/root";
import { Pages } from "../constants/pages";

type StateProps = {
    isLoggedIn: boolean;
};

class Component extends React.Component<StateProps & RouteProps> {
    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props =>
                    this.props.isLoggedIn ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: Pages.Login,
                                state: { from: props.location }
                            }}
                        />
                    )
                }
            />
        );
    }
}

const mapStateToProps: MapStateToProps<
    StateProps,
    RouteProps,
    RootStore
> = store => ({
    isLoggedIn: store.auth.isLoggedIn
});

export const PrivateRoute = connect<StateProps, {}, RouteProps, RootStore>(
    mapStateToProps
)(Component);
