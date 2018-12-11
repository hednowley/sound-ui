import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducers/root-reducer";
import { App } from "./components/app";
import { PersistGate } from "redux-persist/integration/react";
import {
    persistStore,
    persistReducer,
    PersistConfig,
    createTransform
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { serialise, deserialise } from "./utils/serialiser";

/**
 * redux-persist serialises the store with JSON, which doesn't support maps.
 * Hence we use custom serialisation here which supports basic maps
 * (i.e. those without object keys)
 */
const mapTransformer = createTransform(
    inboundState => serialise(inboundState),
    outboundState => deserialise(outboundState),
    {}
);

const storage = storageSession;
const persistConfig: PersistConfig = {
    key: "root",
    storage: storage,
    transforms: [mapTransformer]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("main")
);
