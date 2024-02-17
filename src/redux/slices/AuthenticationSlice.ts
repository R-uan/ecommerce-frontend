import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Authentication {
	authenticated: boolean;
	token: string | null;
}

const initialState: Authentication = {
	authenticated: false,
	token: null,
};
const AuthenticationSlice = createSlice({
	name: "AuthenticationSlice",
	initialState: initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string | null>) => {
			state.token = action.payload;
			action.payload == null ? (state.authenticated = false) : (state.authenticated = true);
		},
	},
});

export default AuthenticationSlice.reducer;
export const { setToken } = AuthenticationSlice.actions;
