import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

export default function FetchTrigger({ callback }: { callback: any }) {
	const [isLastPage, setIsLastPage] = useState(false);
	const { products, last_page, current_page } = useSelector((s: RootState) => s.productsData);
	const [inViewRef, isInView] = useInView({
		delay: 1000,
		trackVisibility: false,
		threshold: 1,
	});
	useEffect(() => {
		if (current_page == last_page && current_page != null) {
			setIsLastPage(true);
		}
	}, [current_page, last_page]);

	useEffect(() => {
		if (isInView) callback();
	}, [isInView]);

	return (
		<>
			{products.length > 0 && isLastPage == false ? (
				<div ref={inViewRef} className="h-[30px] flex align-middle justify-center">
					<div className="animate-spin">
						<RiLoader5Fill size={30} />
					</div>
				</div>
			) : null}
		</>
	);
}
