import { configureStore } from "@reduxjs/toolkit";
import ErrorProviderSlice from "./slices/ErrorProviderSlice";
import ProductsDataSlice from "./slices/ProductsDataSlice";
import AuthenticationSlice from "./slices/AuthenticationSlice";
export const store = configureStore({
	reducer: {
		productsData: ProductsDataSlice,
		errorProvider: ErrorProviderSlice,
		authentication: AuthenticationSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
