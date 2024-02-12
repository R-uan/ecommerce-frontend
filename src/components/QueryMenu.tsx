export default function QueryMenu() {
	return (
		<div className="w-[250px]">
			<div className="flex flex-col gap-[20px]">
				<div>
					<label className="text-xl">
						<b>Warships</b>
					</label>
					<ul>
						<li>Bomber</li>
						<li>Capital Ships</li>
						<li>Cruisers</li>
						<li>Destroyers</li>
						<li>Escorters</li>
						<li>Interceptors</li>
						<li>Stealth Fighters</li>
					</ul>
				</div>
				<div>
					<label className="text-xl">
						<b>Exploration Ships</b>
					</label>
					<ul>
						<li>Colonization Vessel</li>
						<li>Generation Ships</li>
						<li>Interstellar Ark</li>
						<li>Probes</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
