import * as React from "react";
import { connect, MapStateToProps } from "react-redux";
import { RootStore } from "../redux/store/root";
import { Dispatcher } from "../redux/dispatcher";
import { Authenticate } from "../redux/action-creators/auth-action-creators";
import { TextInput } from "../components/form/text-input";
import { SubmitButton } from "../components/form/submit-button";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { Pages } from "../constants/pages";

type DispatchProps = {
    login: (username: string, password: string) => void;
};

type StateProps = {
    isLoggedIn: boolean;
};

type ComponentState = {
    username: string;
    password: string;
};

class LoginComponent extends React.PureComponent<
    StateProps & DispatchProps & RouteComponentProps,
    ComponentState
> {
    constructor(props: StateProps & DispatchProps & RouteComponentProps) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    private onSubmit = () => {
        this.props.login(this.state.username, this.state.password);
    };

    private onUsernameChange = (str: string) => {
        this.setState({ username: str });
    };

    private onPasswordChange = (str: string) => {
        this.setState({ password: str });
    };

    render() {
        if (this.props.isLoggedIn) {
            const from: string =
                this.props.location.state && this.props.location.state.from
                    ? this.props.location.state.from
                    : Pages.Home;
            return <Redirect to={from} />;
        }

        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    <TextInput
                        label="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.onUsernameChange}
                    />
                </label>
                <label>
                    <TextInput
                        type="password"
                        label="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                </label>
                <SubmitButton label="go" onClick={this.onSubmit} />
            </form>
        );
    }
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootStore> = store => ({
    isLoggedIn: store.auth.isLoggedIn
});

const mapDispatchToProps = (dispatch: Dispatcher) => ({
    login: (username: string, password: string) => {
        dispatch(Authenticate(username, password));
    }
});

export const LoginPage = connect<{}, DispatchProps, {}, RootStore>(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);
