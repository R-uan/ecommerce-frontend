"use client";
import ActualPage from "./ActualPage";
import ProductProvider from "./context/ProductProvider";

export default function DynamicProductPage({ params }: { params: { product: string } }) {
	return (
		<ProductProvider>
			<ActualPage slug={params.product} />
		</ProductProvider>
	);
}
