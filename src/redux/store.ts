import { configureStore } from "@reduxjs/toolkit";
import ErrorProviderSlice from "./slices/ErrorProviderSlice";
import ProductListSlice from "./slices/ProductListSlice";
export const store = configureStore({
	reducer: {
		productList: ProductListSlice,
		errorProvider: ErrorProviderSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
