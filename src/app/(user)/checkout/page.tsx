"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Item from "./Item";

export default function Checkout() {
	return (
		<Provider store={store}>
			<main className="w-full h-full flex-1 bg-black p-[20px]">
				<div className="flex flex-row bg-[white] gap-[15px] justify-between w-full h-[40vw] p-[5px] rounded-md">
					<div className="flex flex-col gap-[10px] rounded-md w-[70%] h-full overflow-auto">
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
					<div className="bg-[#eeeeee] rounded-md w-[30%]"></div>
				</div>
			</main>
		</Provider>
	);
}
