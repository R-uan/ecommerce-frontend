import styles from "./styles/header-options.module.scss";

export default function HeaderOptions({ transparent = false }: { transparent?: boolean }) {
	const Warships = ["Bombers", "Capital Ships", "Carriers", "Destroyers", "Fighters", "Interceptors"];

	const Exploration_Ships = ["Explorer Vessels", "Generational Vessels"];
	const backgroundColor = transparent ? "transparent" : "#eeeeee";
	return (
		<div className={styles.menu_options}>
			<ul>
				<li key={"warships"}>
					<a href="">Warships</a>
					<ul style={{ backgroundColor }}>
						{Warships.map((ele, key) => {
							return (
								<li key={key}>
									<input type="button" value={ele} />
								</li>
							);
						})}
					</ul>
				</li>
				<li key={"exploration_ships"}>
					<a href="">Exploration Ships</a>
					<ul style={{ backgroundColor }}>
						{Exploration_Ships.map((ele, key) => {
							return (
								<li key={key}>
									<input type="button" value={ele} />
								</li>
							);
						})}
					</ul>
				</li>
				<li key={"cargo_ships"}>
					<a href="">Cargo Ships</a>
				</li>
			</ul>
		</div>
	);
}
