"use client";
import { store } from "@/redux/store";
import { Suspense, useState } from "react";
import { Provider } from "react-redux";
import ProductMap from "../components/ProductMap";
import s from "./annoying.module.scss";

export default function Catalog() {
	const [option, setOption] = useState(true);
	return (
		<Provider store={store}>
			<main className="w-full min-h-[100vh]">
				<div className="h-[15vh] w-full"></div>
				<div className="h-full flex w-full relative justify-center gap-[20px]">
					<Suspense>
						<ProductMap />
					</Suspense>
					<div className={s.aside}>
						<div className={s.search_options}>
							<a href="#" onClick={() => setOption(!option)} className={s.search_element}>
								<span className={option ? s.selected : ""}>Name</span>
								<span>|</span>
								<span className={!option ? s.selected : ""}>Manufacturer</span>
							</a>
							{option ? <input type="text w-full bg-white" placeholder="Enter name" /> : <input type="text w-full bg-white" placeholder="Enter manufacturer" />}
						</div>
						<hr />
						<div className={s.price_options}>
							<span>Price Range</span>
							<div className={s.price_range}>
								<input type="text" />
								<span>to</span>
								<input type="text" />
							</div>
						</div>
					</div>
				</div>
			</main>
		</Provider>
	);
}
