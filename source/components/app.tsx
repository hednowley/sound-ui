import * as React from "react";
import { LoginPage } from "./login";

interface Props {}

export class App extends React.Component<Props> {
    render() {
        return (
            <div>
                welcome
                <LoginPage />
            </div>
        );
    }
}
