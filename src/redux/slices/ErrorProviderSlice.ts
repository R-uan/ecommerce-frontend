import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const ErrorProviderSlice = createSlice({
	name: "ErrorProvider",
	initialState: { message: "" },
	reducers: {
		setErrorMessage: (state, action: PayloadAction<string>) => {
			state.message = action.payload;
		},
	},
});

export default ErrorProviderSlice.reducer;
export const { setErrorMessage } = ErrorProviderSlice.actions;
