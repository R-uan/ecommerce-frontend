import { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductProvider";

export default function ScreenCover() {
	const [loading, setLoadingScreen] = useState(true);
	const state = useProductContext();

	useEffect(() => {
		if (state.product) {
			setLoadingScreen(false);
		} else {
			setLoadingScreen(true);
		}
	}, [state.product]);

	const errorMessage = state.errorMessage;

	return (
		<>
			{!loading ? null : (
				<div className="w-full h-[calc(100vh - 6vw)] z-50 absolute bg-[#050A0E] top-0 left-0 flex items-center justify-center">
					<span className="text-[5vw] font-bebas text-white">{errorMessage}</span>
				</div>
			)}
		</>
	);
}
