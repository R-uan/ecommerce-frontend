import IProducts from "@/interfaces/IProducts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProductDataArray {
	data: IProducts[];
}

const InitialState: ProductDataArray = { data: [] };

const ProductsDataSlice = createSlice({
	name: "ProductsData",
	initialState: InitialState,
	reducers: {
		setProductsDataTest: (state, action: PayloadAction<IProducts[] | []>) => {
			if (state.data) {
				state.data = action.payload;
			}
		},
	},
});

export const { setProductsDataTest } = ProductsDataSlice.actions;
export default ProductsDataSlice.reducer;
