import { configureStore } from "@reduxjs/toolkit";
import ProductsDataSlice from "./slices/ProductsDataSlice";
import ErrorProviderSlice from "./slices/ErrorProviderSlice";
export const store = configureStore({
	reducer: {
		productsData: ProductsDataSlice,
		errorProvider: ErrorProviderSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
