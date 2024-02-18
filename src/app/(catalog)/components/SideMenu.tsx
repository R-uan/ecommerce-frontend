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
			<form className={styles.filter_options} action="">
				<div className={styles.query_field}>
					<input name="name" type="text" placeholder="Search" />
				</div>
				<div className={styles.category_list}>
					<ul onClick={handleClick} id="warships">
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
						<li>
							<input type="button" value="Explorer Vessels" />
						</li>
						<li>
							<input type="button" value="Generational Vessels" />
						</li>
						<li>
							<input type="button" value="Cargo Ships" />
						</li>
					</ul>
				</div>
			</form>
		</div>
	);
}
