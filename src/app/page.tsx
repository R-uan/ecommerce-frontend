"use client";
import QueryMenu from "@/components/QueryMenu";
import Results from "@/components/Results";
import { store } from "@/redux/store";
import { Provider, useSelector } from "react-redux";

export default function Home() {
	return (
		<div className="flex flex-col">
			<div className="w-full h-[30px] bg-[#252525]">Showing {}</div>
			<div className="flex flex-row gap-[20px] p-[10px]">
				<Provider store={store}>
					<QueryMenu />
					<Results />
				</Provider>
			</div>
		</div>
	);
}
