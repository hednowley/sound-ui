import * as React from "react";
import { LoginPage } from "./login";
import { HashRouter, Route } from "react-router-dom";
import { Pages } from "../constants/pages";
import { HomePage } from "./home";
import { PrivateRoute } from "./private-route";

export class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <React.Fragment>
                    <Route exact path={Pages.Login} component={LoginPage} />
                    <PrivateRoute path={Pages.Home} component={HomePage} />
                </React.Fragment>
            </HashRouter>
        );
    }
}
