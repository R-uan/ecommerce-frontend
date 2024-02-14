"use client";
import styles from "@/styles/coringuei.module.scss";
import Header from "../../components/Header";
import { useEffect } from "react";

export default function Catalog() {
	function Cfl(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	const typesData: any = {
		warships: [
			"Destroyers",
			"Capital Ships",
			"Bombers",
			"Carriers",
			"Fighters",
			"Interceptors",
		],
		exploration_ships: ["Explorer Vessels", "Generational Vessels"],
		cargo_ships: [],
	};

	/* let final = [];
	useEffect(() => {
		for (let key in typesData) {
			const title = key
				.split("_")
				.map((b) => Cfl(b))
				.join(" ");
			final.push(title);
			for (let type in typesData[key]) {
				final.push(typesData[key][type]);
			}
			final.push("_");
		}
	}); */

	return (
		<div>
			<Header />
			<div className={styles.bandit}>
				<div className={styles.side_bar}>
					<div className="filter-options">
						<form className={styles.filter_options} action="">
							<label htmlFor="query">
								Search
								<input name="query" type="text" />
							</label>
							<ul id="warships">
								<li>
									<span>Warships</span>
								</li>
								<li>Bombers</li>
								<li>Capital Ships</li>
								<li>Carriers</li>
								<li>Destroyers</li>
								<li>Fighter</li>
								<li>Interceptor</li>
								<br />
								<li>
									<span>Exploration Ships</span>
								</li>
								<li>Explorer Vessels</li>
								<li>Generational Vessels</li>
								<br />
								<li>
									<span>Cargo Ships</span>
								</li>
							</ul>
						</form>
					</div>
				</div>
				<div className={styles.catalog_itens}>
					<h3>Results</h3>
					<div></div>
				</div>
			</div>
		</div>
	);
}
