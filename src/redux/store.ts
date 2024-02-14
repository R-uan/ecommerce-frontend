import { configureStore } from "@reduxjs/toolkit";
import ErrorProviderSlice from "./slices/ErrorProviderSlice";
export const store = configureStore({
	reducer: {
		errorProvider: ErrorProviderSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
