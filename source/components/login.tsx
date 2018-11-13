import * as React from "react";
import { connect } from "react-redux";
import { newLoginThunk } from "../redux/thunks";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "../redux/actions";
import { State } from "../redux/store"

interface Props {}

interface DispatchProps {
  login: (username: string, password: string) => void
}

interface ComponentState {
  username: string;
  password: string;
}

class LoginComponent extends React.Component<Props & DispatchProps, ComponentState> {
  constructor(props: Props & DispatchProps) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  private onSubmit = (event: any) => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password)
  };

  private onUsernameChange = (event: any) => {
    this.setState({ username: event.target.value });
  };

  private onPasswordChange = (event: any) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          username
          <input
            type="text"
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
        </label>
        <label>
          password
          <input
            type="password" 
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<State, {}, Action>) => ({
  login: (username: string, password: string) => {
    dispatch(newLoginThunk(username, password))
  }
})

export const Login = connect<{}, DispatchProps, Props, State>(
  null, mapDispatchToProps
)(LoginComponent) 