import IUser from "@/interfaces/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Authentication {
	token: string | null;
	user: IUser | null;
	authenticated: boolean;
}

const initialState: Authentication = {
	authenticated: false,
	user: null,
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
		setUser: (state, action: PayloadAction<IUser | null>) => {
			state.user = action.payload;
		},
	},
});

export default AuthenticationSlice.reducer;
export const { setToken, setUser } = AuthenticationSlice.actions;
