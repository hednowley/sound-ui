import * as React from "react";
import { Login } from "./login";

interface Props {}

export class App extends React.Component<Props> {
	render() {
		return (
			<div>
				welcome
				<Login />
			</div>
		);
	}
}