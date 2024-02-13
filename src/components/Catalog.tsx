"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Catalog({ children }: { children: ReactNode }) {
	const [isLastPage, setIsLastPage] = useState(false);
	const { products, total_itens, last_page, current_page } = useSelector(
		(s: RootState) => s.productsData
	);
	const [inViewRef, isInView] = useInView({ delay: 1000, trackVisibility: false, threshold: 1 });

	useEffect(() => {
		if (current_page === last_page) setIsLastPage(true);
	}, [current_page]);

	useEffect(() => {}, [isInView]);

	return (
		<>
			<div className="flex flex-col w-[85vw] gap-[15px] outline outline-2 outline-blue-600">
				<div>
					<span className="text-2xl font-bold">Results</span>
					<p className="text-sm">
						Showing {products.length} of {total_itens}
					</p>
				</div>
				{children}
			</div>
		</>
	);
}
