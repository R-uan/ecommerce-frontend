"use client";
import Link from "next/link";
import BestSellersMini from "./components/BestSellersMini";
import styles from "./styles/home.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="flex flex-col gap-[5px] h-fit w-full pb-[5px]">
				<div className={styles.cb1}>
					<div className="flex flex-row justify-between w-full h-[100%] p-[20px]">
						<div></div>
						<div className="w-[40%] m-[2px] h-[100%] relative">
							<Link className={styles.catalog_button} href="/catalog">
								<button>
									<span>See our catalog</span>
									<div />
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="flex h-[37vw] w-full gap-[5px]">
					<div className={styles.cb_2_1}></div>
					<div className={styles.cb_2_2}></div>
				</div>
			</div>
			<div className="h-[33vw] pt-[1vw] w-full flex flex-col justify-center items-center">
				<h1 className="text-[4.58vw] leading-[4.58vw] text-[#FF003C] text-center font-bebas">
					NUMBER ONE SPACESHIP DEALER <br /> IN THE KNOWN UNIVERSE!
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
