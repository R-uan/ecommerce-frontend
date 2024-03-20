import { configureStore } from "@reduxjs/toolkit";
import ProductListing from "./slices/ProductListing";
import ExpandOrderSlice from "./slices/ExpandOrderSlice";
import ErrorProviderSlice from "./slices/ErrorProviderSlice";
import AuthenticationSlice from "./slices/AuthenticationSlice";
export const store = configureStore({
	reducer: {
		error_provider: ErrorProviderSlice,
		authentication: AuthenticationSlice,
		expand_order: ExpandOrderSlice,
		product_listing: ProductListing,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
