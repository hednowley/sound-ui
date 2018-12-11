import { AuthStore } from "./auth";
import { DataStore } from "./data";

export interface RootStore {
    auth: AuthStore;
    data: DataStore;
}
