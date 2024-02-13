import IProducts from "@/interfaces/IProducts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProductData {
	products: IProducts[];
	total_itens: number;
	current_page: string | null;
	next_page: string | null;
	last_page: string | null;
}

const InitialState: ProductData = {
	products: [],
	total_itens: 0,
	current_page: null,
	last_page: null,
	next_page: null,
};

const ProductsDataSlice = createSlice({
	name: "ProductsData",
	initialState: InitialState,
	reducers: {
		setProductsData: (state, action: PayloadAction<IProducts[] | []>) => {
			state.products = action.payload;
		},
		resetProductsData: (state) => {
			state.products = [];
		},
		setTotalItens: (state, action: PayloadAction<number>) => {
			state.total_itens = action.payload;
		},
		setCurrentPage: (state, action: PayloadAction<string>) => {
			state.current_page = action.payload;
		},
		setNextPage: (state, action: PayloadAction<string>) => {
			state.next_page = action.payload;
		},
		setLastPage: (state, action: PayloadAction<string>) => {
			state.last_page = action.payload;
		},
	},
});

export default ProductsDataSlice.reducer;
export const {
	setProductsData,
	resetProductsData,
	setTotalItens,
	setCurrentPage,
	setNextPage,
	setLastPage,
} = ProductsDataSlice.actions;
