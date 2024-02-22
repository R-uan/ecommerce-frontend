"use client";
import Image from "next/image";
import styles from "./singular-product.module.scss";
import testimage from "/public/images/testvertical.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { RequestProductById } from "@/scripts/requests/RequestProducts";
import { useEffect, useState } from "react";
import ProductMiniature from "../../components/ProductMiniature";
import UserReview from "./UserReview";
import IProducts from "@/interfaces/IProducts";

const ProductTestData = {
	id: 1,
	name: "Example Product",
	description: "This is a mock product for testing purposes.",
	image_url: "https://example.com/image.jpg",
	category: "Test Category",
	availability: true,
	unit_price: "19.99",
	manufacturers_id: 123,
	manufacturer_name: "Mock Manufacturer",
};

export default function Product({ params }: { params: { product: string } }) {
	const [product, setProduct] = useState<IProducts | null>(null);
	async function Default() {
		const response = await RequestProductById(params.product);
		console.log(response);
		setProduct(response);
	}

	useEffect(() => {
		Default();
	}, []);

	return (
		<main className={styles.main}>
			<div className="h-[50px] w-full"></div>
			<div className="flex flex-col gap-[20px] w-full min-h-[85vh] p-[2px]">
				<div className="flex w-full gap-[30px]">
					<div className="w-[40%] flex justify-center">
						{/* 450x600   */}
						<div className="relative w-[360px] h-[480px] rounded-md">
							<Image
								fill={true}
								className="object-cover rounded-md"
								alt=""
								src={testimage}></Image>
						</div>
					</div>
					<section className={styles.product_information}>
						<div className="w-[60%]">
							<h1 className="text-[3.5vw] leading-[3vw]">{product?.name}</h1>
							<h3 className="text-[1.75vw]">{product?.manufacturer_name}</h3>
							<span>Rating</span>
							<h3 className="text-[3vw] leading-[4vw]">${product?.unit_price}</h3>
							<p className="text-[1.5vw] leading-snug w-[100%]">
								{product?.description}
							</p>
						</div>
						<div className={styles.cb2}>
							<button type="button" className={styles.buy_button}>
								<FaShoppingCart className="text-[1.5vw]" />
								BUY NOW
							</button>
							<button type="button" className={styles.add_to_cart}>
								<FaCartPlus className="text-[1.5vw]" />
							</button>
						</div>
					</section>
				</div>
				<div className="h-[20px] w-full" />
				<div className={styles.additional_information}>
					<section>
						<h1 className="text-[1.75vw] w-full">Product Description</h1>
						<div className="h-[100%]">
							<p className="text-[1.5vw] leading-snug">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
								incidunt illo et quae nisi doloribus commodi fuga molestiae, eum
								minima corrupti magni, distinctio animi facere numquam nam esse!
								Tempora, qui?
							</p>
							<br />
							<p className="text-[1.5vw] leading-snug">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil
								blanditiis obcaecati iure odit nemo dolore, error aspernatur
								necessitatibus culpa ad animi quos veniam debitis quas. Consectetur
								excepturi quisquam eveniet! Eaque adipisci necessitatibus qui totam
								saepe consequuntur, ad quibusdam deleniti libero, numquam laboriosam
								quam corrupti, possimus tenetur quasi id dolorum aliquid. Quod
								corporis aut iusto necessitatibus ratione sed consequatur
								distinctio! Obcaecati labore, iure veniam incidunt aspernatur
								voluptate, facilis ad suscipit odio rem accusantium ratione aliquid
								impedit mollitia explicabo nostrum nihil molestiae numquam. Optio
								ratione eaque sequi, debitis nemo hic sint!
							</p>
						</div>
					</section>
					<section>
						<h1 className="text-[1.75vw] w-full">Technical Information</h1>
						<div className="flex flex-col gap-[20px]">
							<p className="text-[1.5vw] leading-snug">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quasi
								ab illo omnis voluptas aliquid, magni voluptate commodi recusandae
								distinctio consequatur accusamus enim. Reiciendis hic voluptas
								veniam, laudantium aperiam placeat. Ea dolor mollitia molestiae
								repellat, et voluptatum eos voluptate vero fugit distinctio
								necessitatibus qui quos deleniti impedit? Repudiandae consequuntur
								voluptatibus expedita eum neque, enim tempora nisi iure officia
								dicta architecto.
							</p>
						</div>
					</section>
					<section>
						<h1>SIMILAR PRODUCTS</h1>
						<div className="flex w-full justify-between">
							<ProductMiniature data={ProductTestData} />
							<ProductMiniature data={ProductTestData} />
							<ProductMiniature data={ProductTestData} />
							<ProductMiniature data={ProductTestData} />
							<ProductMiniature data={ProductTestData} />
						</div>
					</section>
					<section>
						<h1>From same Manufacturer</h1>
						<div className="flex w-full justify-between">
							<ProductMiniature data={ProductTestData} />
							<ProductMiniature data={ProductTestData} />
							<ProductMiniature data={ProductTestData} />
							<ProductMiniature data={ProductTestData} />
							<ProductMiniature data={ProductTestData} />
						</div>
					</section>
					<section>
						<h1>Reviews</h1>
						<div className="flex flex-col w-full gap-5">
							<div>
								{/* <ol>
									<li>1</li>
									<li>2</li>
									<li>3</li>
									<li>4</li>
									<li>5</li>
								</ol> */}
							</div>
							<div className={styles.user_reviews}>
								<UserReview />
								<UserReview />
								<UserReview />
								<UserReview />
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
