import styles from "./styles/header-options.module.scss";

export default function HeaderOptions() {
	const Warships = [
		"Bombers",
		"Capital Ships",
		"Carriers",
		"Destroyers",
		"Fighters",
		"Interceptors",
	];

	const Exploration_Ships = ["Explorer Vessels", "Generational Vessels"];
	return (
		<div className={styles.menu_options}>
			<ul>
				<li key={"Warships"}>
					<a href="">Warships</a>
					<ul>
						{Warships.map((ele, key) => {
							return (
								<li key={key}>
									<input type="button" value={ele} />
								</li>
							);
						})}
					</ul>
				</li>
				<li key={"Exploration ships"}>
					<a href="">Exploration Ships</a>
					<ul>
						{Exploration_Ships.map((ele, key) => {
							return (
								<li key={key}>
									<input type="button" value={ele} />
								</li>
							);
						})}
					</ul>
				</li>
				<li key={"Cargo Ships"}>
					<a href="">Cargo Ships</a>
				</li>
			</ul>
		</div>
	);
}
