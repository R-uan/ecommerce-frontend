import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./slices/AuthenticationSlice";
import ErrorProviderSlice from "./slices/ErrorProviderSlice";
import ExpandOrderSlice from "./slices/ExpandOrderSlice";
import ProductListing from "./slices/ProductListing";
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
