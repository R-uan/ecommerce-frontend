import IPaginateResponse from "@/interfaces/IPaginateResponse";
import { IProduct } from "@/interfaces/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
interface InitialState {
	data: IProduct[] | null;
	total: number | null;
	current_page: number | null;
	last_page: number | null;
	next_page_url: string | null;
}

const initial_state: InitialState = {
	data: null,
	current_page: null,
	last_page: null,
	next_page_url: null,
	total: null,
};

const ProductListing = createSlice({
	name: "ProductListing",
	initialState: initial_state,
	reducers: {
		setProductList: (state, action: PayloadAction<IPaginateResponse>) => {
			const { data, current_page, last_page, next_page_url, total } = action.payload;
			state.next_page_url = next_page_url;
			state.current_page = current_page;
			state.last_page = last_page;
			state.total = total;
			state.data = data;
		},
		setPagination: (state, action: PayloadAction<IPaginateResponse>) => {
			if (state.data && action.payload.data) state.data = [...state.data, ...action.payload.data];
			else state.data = action.payload.data;

			state.current_page = action.payload.current_page;
			state.next_page_url = action.payload.next_page_url;
		},
	},
});

export default ProductListing.reducer;
export const { setPagination, setProductList } = ProductListing.actions;
