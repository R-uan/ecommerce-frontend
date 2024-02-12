import { configureStore } from "@reduxjs/toolkit";
import ProductsDataSlice from "./slices/ProductsDataSlice";
export const store = configureStore({
	reducer: {
		productsData: ProductsDataSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
