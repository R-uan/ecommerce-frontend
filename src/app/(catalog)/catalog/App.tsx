"use client";
import { useSearchParams } from "next/navigation";
import ProductMap from "../components/ProductMap";

export default function App() {
	const params = useSearchParams();
	const q = params.get("name");

	return (
		<main className="w-full bg-[#050A0E]">
			<div className="h-full flex w-full relative items-center justify-center flex-col mt-[9vh]">
				<div className="w-full h-[50vh] flex items-center justify-center bg-cover bg-no-repeat bg-banner">
					<h1 className="text-white text-[4vw] font-bebas">{!q ? "Catalog" : q}</h1>
				</div>
				<ProductMap />
			</div>
		</main>
	);
}
