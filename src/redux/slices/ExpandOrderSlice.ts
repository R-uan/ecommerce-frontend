import IOrder from "@/interfaces/IOrder";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
	order: IOrder | null;
	expanded: boolean;
}

const initial: State = { order: null, expanded: false };
const ExpandOrder = createSlice({
	initialState: initial,
	name: "ExpandOrder",
	reducers: {
		setCurrentOrder: (state, action: PayloadAction<IOrder>) => {
			state.order = action.payload;
		},
		toggleExpansion: (state) => {
			state.expanded = !state.expanded;
		},
	},
});

export default ExpandOrder.reducer;
export const { setCurrentOrder, toggleExpansion } = ExpandOrder.actions;
