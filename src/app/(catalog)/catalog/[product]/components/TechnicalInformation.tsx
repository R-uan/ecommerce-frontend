import { useProductContext } from "../context/ProductProvider";
import styles from "../singular-product.module.scss";

export default function TechnicalInformation() {
	const state = useProductContext();
	const product = state.product;
	return (
		<section className="gap-[15px] flex flex-col">
			<h1 className="text-[2vw] w-full font-bebas text-[#FF003C]">Technical Information</h1>
			<div className={styles.technical_information}>
				<table className="flex flex-col text-all-white">
					<tbody>
						<tr>
							<th>Energy System</th>
							<td>{product?.product_details?.energy_system}</td>
						</tr>
						<tr>
							<th>Landing System</th>
							<td>{product?.product_details?.landing_system}</td>
						</tr>
						<tr>
							<th>Emergency System</th>
							<td>{product?.product_details?.emergency_system}</td>
						</tr>
						<tr>
							<th>Propulsion System</th>
							<td>{product?.product_details?.propulsion_system}</td>
						</tr>
						<tr>
							<th>Navigation System</th>
							<td>{product?.product_details?.navigation_system}</td>
						</tr>
						<tr>
							<th>Comunication System</th>
							<td>{product?.product_details?.comunication_system}</td>
						</tr>
						<tr>
							<th>Termic Protection</th>
							<td>{product?.product_details?.termic_protection}</td>
						</tr>
						<tr>
							<th>External Structure</th>
							<td>{product?.product_details?.external_structure}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}
