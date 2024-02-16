import IProducts from "@/interfaces/IProducts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IProductList {
	data: IProducts[] | null;
	total: number | null;
	current_page: number | null;
	last_page: number | null;
	next_page_url: string | null;
}

const initialState: IProductList = {
	data: null,
	total: null,
	current_page: null,
	next_page_url: null,
	last_page: null,
};

const ProductListSlice = createSlice({
	name: "ProductListing",
	initialState: initialState,
	reducers: {
		setListData: (state, action: PayloadAction<IProducts[]>) => {
			state.data = action.payload;
		},
		setAll: (state, action: PayloadAction<IProductList>) => {
			const { data, current_page, last_page, next_page_url, total } = action.payload;
			state.data = data;
			state.current_page = current_page;
			state.last_page = last_page;
			state.next_page_url = next_page_url;
			state.total = total;
		},
	},
});

export default ProductListSlice.reducer;
export const { setListData, setAll } = ProductListSlice.actions;
