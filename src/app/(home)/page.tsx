"use client";
import Link from "next/link";
import styles from "./home.module.scss";
import Header from "../components/Header/Header";
import Image from "next/image";
import BestSellers from "./BestSellers";

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.primary_content}>
					<div className={styles.main_cb1}>
						<h1 className="text-4xl">
							NUMBER ONE <br />
							SPACESHIP DEALER <br />
							IN THE SOLAR SYSTEM.
						</h1>
						<p>We guarantee that you will receive your ship in up to 4 pluto years.</p>
						<h6>Not eligible for descendants.</h6>
					</div>
					<div className={styles.main_cb2}>
						<Link className={styles.catalog_button} href="/catalog">
							<button>
								<span>See our catalog</span>
								<div />
							</button>
						</Link>
					</div>
					<div className={styles.primary_bg_image} />
				</div>
				<div className={styles.secondary_content}>
					<div className={styles.secondary_cb1}>
						<p>
							Satisfying client all over the galaxy, Gemini is reference for the
							spaceship dealership field.
						</p>
					</div>
					<div className={styles.secondary_cb2}>
						<h3>Best Sellers</h3>
						<BestSellers />
					</div>
				</div>
			</main>
		</>
	);
}
