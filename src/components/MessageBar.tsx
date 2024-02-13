"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function MessageBar() {
	const errorMessage = useSelector((state: RootState) => state.errorProvider.message);
	return (
		<div className="flex align-middle justify-center w-full h-[25px] bg-[#252525]">
			{errorMessage}
		</div>
	);
}
