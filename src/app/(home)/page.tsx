"use client";
import Link from "next/link";
import BestSellers from "./components/BestSellers";
import styles from "./styles/home.module.scss";
import testimage from "../../../public/images/product-test-image.jpg";
import Image from "next/image";
import BestSellersMini from "./components/BestSellersMini";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="flex flex-col gap-[5px] w-full pb-[5px]">
				<div className={styles.cb1}></div>
				<div className="flex h-[70vh] w-full gap-[5px]">
					<div className={styles.cb_2_1}></div>
					<div className={styles.cb_2_2}></div>
				</div>
			</div>
			<div className="h-[45vh] pt-[50px] w-full flex flex-col justify-center items-center">
				<h1 className="text-[4.58vw] leading-[4.58vw] text-[#FF003C] text-center font-bebas">
					NUMBER ONE SPACESHIP DEALER <br /> IN THE SOLAR SYSTEM!
				</h1>
				<p className="text-[1.5vw] leading-[1.5vw] text-[#FCEE09]">We guarantee that you will receive your ship in up to 4 pluto years.</p>
				<h6 className="text-[0.9vw]">Descendants are not eligible for ownership.</h6>
			</div>
			<div className="flex flex-col gap-[10px] h-fit w-[97%] p-[5px]">
				<div className={styles.itens_1}>
					<BestSellersMini />
					<BestSellersMini />
					<BestSellersMini />
				</div>
				<div className={styles.itens_2}>
					<BestSellersMini />
					<BestSellersMini />
					<BestSellersMini />
				</div>
			</div>
		</main>
	);
}
