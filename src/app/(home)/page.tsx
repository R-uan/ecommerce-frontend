"use client";
import mainbg from "../../../public/images/home/main-bg.jpg";
import Link from "next/link";
import styles from "@/styles/home.module.scss";
import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col w-full h-[100vh]">
			<Header />
			<div className="flex flex-row h-[100vh] w-full">
				<div className={styles.cb1}>
					<h1 className="text-4xl">
						NUMBER ONE <br />
						SPACESHIP DEALER <br />
						IN THE SOLAR SYSTEM.
					</h1>
					<p>We guarantee that you will receive your ship in up to 4 pluto years.</p>
				</div>
				<div className={styles.cb2}>
					<Link className={styles.catalog_button} href="/catalog">
						<button>
							<p>See our catalog</p>
							<div />
						</button>
					</Link>
				</div>
			</div>
			<footer className="h-[10vh] m-[5px]"></footer>
			<div className={styles.background}>
				<Image alt="te" src={mainbg}></Image>
			</div>
		</div>
	);
}
