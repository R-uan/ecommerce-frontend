"use client";
import Link from "next/link";
import MediaQuery from "react-responsive";
import styles from "./styles/home.module.scss";
import FeaturedProducts from "./components/FeaturedProducts";
import { Suspense, useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 200);
	}, []);

	return (
		<Suspense fallback={<LoadingScreen />}>
			{loading ? (
				<LoadingScreen />
			) : (
				<main className={styles.main}>
					<MediaQuery maxWidth={760}>
						<div className={styles.mobile_content_box}>
							<Link className={styles.catalog_button} href="/catalog">
								<button>
									<span>See our catalog</span>
									<div />
								</button>
							</Link>
						</div>
					</MediaQuery>
					<MediaQuery minWidth={761}>
						<div className={styles.content_box}>
							<div>
								<div>
									<div></div>
									<div>
										<Link className={styles.catalog_button} href="/catalog">
											<button>
												<span>See our catalog</span>
												<div />
											</button>
										</Link>
									</div>
								</div>
							</div>
							<div>
								<div className={styles.cb_2_1}></div>
								<div className={styles.cb_2_2}></div>
							</div>
						</div>
					</MediaQuery>
					<div className={styles.content_box_2}>
						<h1 className="font-bebas">
							NUMBER ONE SPACESHIP DEALER <br /> IN THE KNOWN UNIVERSE!
						</h1>
						<p>We guarantee that you will receive your ship in up to 4 pluto years.</p>
					</div>
					<FeaturedProducts />
				</main>
			)}
		</Suspense>
	);
}
