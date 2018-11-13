import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"; 
import thunk from "redux-thunk";
import { reducer } from "./redux/reducer";
import { App } from "./components/app";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>,
	document.getElementById("main") 
); 