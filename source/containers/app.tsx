import * as React from "react";
import { LoginPage } from "./login";
import { HashRouter, Route } from "react-router-dom";
import { Pages } from "../constants/pages";

interface Props {}

export class App extends React.Component<Props> {
    render() {
        return (
            <HashRouter>
                <Route path={Pages.Login}>
                    <LoginPage />
                </Route>
            </HashRouter>
        );
    }
}
