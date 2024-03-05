import { configureStore } from "@reduxjs/toolkit";
import ErrorProviderSlice from "./slices/ErrorProviderSlice";
import ProductsDataSlice from "./slices/ProductsDataSlice";
import AuthenticationSlice from "./slices/AuthenticationSlice";
import ExpandOrderSlice from "./slices/ExpandOrderSlice";
export const store = configureStore({
	reducer: {
		products_data: ProductsDataSlice,
		error_provider: ErrorProviderSlice,
		authentication: AuthenticationSlice,
		expand_order: ExpandOrderSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
