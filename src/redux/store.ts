import { configureStore } from "@reduxjs/toolkit";
import ErrorProviderSlice from "./slices/ErrorProviderSlice";
import ProductListSlice from "./slices/ProductListSlice";
import AuthenticationSlice from "./slices/AuthenticationSlice";
export const store = configureStore({
	reducer: {
		productList: ProductListSlice,
		errorProvider: ErrorProviderSlice,
		authentication: AuthenticationSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
