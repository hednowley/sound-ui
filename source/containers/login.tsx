import * as React from "react";
import { connect } from "react-redux";
import { RootStore } from "../redux/store/root";
import { Dispatcher } from "../redux/dispatcher";
import { Login } from "../redux/action-creators/auth-action-creators";
import { TextInput } from "../components/form/text-input";
import { SubmitButton } from "../components/form/submit-button";

interface Props {}

interface DispatchProps {
    login: (username: string, password: string) => void;
}

interface ComponentState {
    username: string;
    password: string;
}

class LoginComponent extends React.PureComponent<
    Props & DispatchProps,
    ComponentState
> {
    constructor(props: Props & DispatchProps) {
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

const mapDispatchToProps = (dispatch: Dispatcher) => ({
    login: (username: string, password: string) => {
        dispatch(Login(username, password));
    }
});

export const LoginPage = connect<{}, DispatchProps, Props, RootStore>(
    null,
    mapDispatchToProps
)(LoginComponent);
