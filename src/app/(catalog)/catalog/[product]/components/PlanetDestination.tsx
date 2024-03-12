import { IPlanetDestination } from "@/interfaces/IOrder";
import { RequestDestinations } from "@/scripts/requests/RequestProducts";
import { useEffect, useState } from "react";

export default function PlanetDestination() {
	const [destinations, setDestinations] = useState<IPlanetDestination[] | null>(null);
	const [current, setCurrent] = useState<IPlanetDestination | null>(null);
	async function Fetch() {
		try {
			const destinations = await RequestDestinations();
			if (destinations) setDestinations(destinations);
		} catch (error) {
			console.log(error);
			setTimeout(() => Fetch(), 60000);
		}
	}

	function onChangexD(event: React.ChangeEvent<HTMLSelectElement>) {
		const index = event.target.value;
		if (index && index != "-1") {
			setCurrent(destinations![parseInt(index)]);
		}
	}

	useEffect(() => {
		Fetch();
	}, []);
	return (
		<>
			<div className="flex flex-col mb-[20px] gap-[5px] w-[17vw] h-[10vw]">
				<label className="flex flex-col w-full text-[1.5vw] leading-snug" htmlFor="destiny">
					Planet Dropoff
					<select onChange={onChangexD} className="bg-[#2E3840]" name="" id="destiny">
						<option value={-1}>Choose Destination</option>
						{destinations?.map((planet, index) => {
							return <option value={index}>{planet.name}</option>;
						})}
					</select>
				</label>
				<p className="text-[1.25vw] leading-[1.25vw]">{current?.special_conditions ?? "Some destinations may have special conditions."}</p>
			</div>
			<h3 className="text-[1.5vw] leading-[1.5vw]">Delivery Fee: ${current?.delivery_price}</h3>
		</>
	);
}
