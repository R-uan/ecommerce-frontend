import styles from "@/styles/side-menu.module.scss";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
export default function SideMenu() {
	const router = useRouter();
	async function handleClick(event: MouseEvent) {
		const input = event.target as HTMLInputElement;
		const value = input.value;
		const format = value.split(" ").join("_");
		const url = `/catalog?q=${format}`;
		router.push(url);
	}

	return (
		<div className={styles.side_bar}>
			<div className="filter-options">
				<form className={styles.filter_options} action="">
					<label htmlFor="name">
						Search
						<input name="name" type="text" />
					</label>
					<ul onClick={handleClick} id="warships">
						<li>
							<span>
								<input type="button" value="Warships" />
							</span>
						</li>
						<li>
							<input type="button" value="Bombers" />
						</li>
						<li>
							<input type="button" value="Capital Ships" />
						</li>
						<li>
							<input type="button" value="Carriers" />
						</li>
						<li>
							<input type="button" value="Destroyers" />
						</li>
						<li>
							<input type="button" value="Fighters" />
						</li>
						<li>
							<input type="button" value="Interceptors" />
						</li>
						<br />
						<li>
							<span>
								<input type="button" value="Exploration Ships" />
							</span>
						</li>
						<li>
							<input type="button" value="Explorer Vessels" />
						</li>
						<li>
							<input type="button" value="Generational Vessels" />
						</li>
						<br />
						<li>
							<span>
								<input type="button" value="Cargo Ships" />
							</span>
						</li>
					</ul>
				</form>
			</div>
		</div>
	);
}
