import { useRouter } from "next/navigation";
import styles from "./styles/header-options.module.scss";
import { smoochSans } from "@/scripts/fonts";

export default function HeaderOptions() {
	const router = useRouter();
	async function handleClick(event: MouseEvent) {
		const input = event.target as HTMLInputElement;
		const value = input.value;
		const format = value.split(" ").join("_");
		const url = `/catalog?q=${format}`;
		router.push(url);
	}

	return (
		<div className={styles.menu_options}>
			<ul>
				<li>
					<a href="">Warships</a>
					<ul>
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
					</ul>
				</li>
				<li>
					<a href="">Exploration Ships</a>
					<ul>
						<li>
							<input type="button" value="Explorer Vessels" />
						</li>
						<li>
							<input type="button" value="Generational Vessels" />
						</li>
					</ul>
				</li>
				<li>
					<a href="">Cargo Ships</a>
				</li>
			</ul>
		</div>
	);
}
