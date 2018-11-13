import * as React from "react";
import { ping } from "../api/ping";
import { server } from "../config";

interface Props {}

interface State {
  username: string;
  password: string;
}

export class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  private onSubmit = (event: any) => {
    event.preventDefault();
    ping(server, this.state.username, this.state.password)
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
