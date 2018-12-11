export interface AuthStore {
    isLoggedIn: boolean;
    token?: string;
}

export const Initial: AuthStore = {
    isLoggedIn: false
};
