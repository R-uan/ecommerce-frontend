import { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductProvider";

export default function ScreenCover() {
	const [show, setshow] = useState(true);
	const state = useProductContext();

	useEffect(() => {
		if (state.product) {
			setshow(false);
		}
	}, [state.fetched]);

	const errorMessage = state.errorMessage;
	return (
		<>
			{!show ? null : (
				<div className="w-full h-[100vh] z-50 absolute bg-[#050A0E] top-0 left-0 flex items-center justify-center">
					<span className="text-[5vw] font-bebas">{errorMessage}</span>
				</div>
			)}
		</>
	);
}
