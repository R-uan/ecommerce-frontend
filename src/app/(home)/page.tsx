"use client";
import Link from "next/link";
import styles from "@/styles/home.module.scss";
import Header from "../components/Header";
import Image from "next/image";

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
					<div className={styles.secondary_cb1}></div>
					<div className={styles.secondary_cb2}>
						<div className={styles.review_1}>
							<div className={styles.review_image}></div>
							<div className={styles.review_text}>
								<div className={styles.review_client}>
									<span>Han Sozinho</span>
									<span>Milenio Falcão</span>
								</div>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
									vel ab dolores in repellat veniam dolorem magni nisi, tempore
									similique ex quis at deserunt soluta ipsum ducimus id sit
									labore. <br /> Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Distinctio, dolorem accusantium omnis neque
									voluptatibus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className="h-[10vh] m-[5px]"></footer>
		</>
	);
}
