"use client";
import Link from "next/link";
import BestSellers from "./components/BestSellers";
import styles from "./styles/home.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="relative h-[100vh] flex justify-center align-middle p-[2px]">
				<div className="flex flex-col justify-center w-[60%] h-[100%] p-[20px]">
					<h1 className="text-[4vw] leading-[4vw]">
						NUMBER ONE <br />
						SPACESHIP DEALER <br />
						IN THE SOLAR SYSTEM!
					</h1>
					<p className="text-[1.5vw] leading-[1.5vw]">We guarantee that you will receive your ship in up to 4 pluto years.</p>
					<h6 className="text-[0.7vw]">Not eligible for descendants.</h6>
				</div>
				<div className="w-[40%] m-[2px] h-[100%] relative">
					<Link className={styles.catalog_button} href="/catalog">
						<button>
							<span>See our catalog</span>
							<div />
						</button>
					</Link>
				</div>
				<div className={styles.primary_bg_image} />
			</div>
			<div className="flex flex-col justify-center align-middle gap-1 h-[100vh] p-[5px]">
				<div className="w-full h-[40%]">
					<p>Satisfying client all over the galaxy, Gemini is reference for the spaceship dealership field.</p>
				</div>
				<div className="flex flex-col justify-end align-middle w-[100%] h-[60%] p-[5px]">
					<h1 className="text-[2vw]">Best Sellers</h1>
					<BestSellers />
				</div>
			</div>
		</main>
	);
}
