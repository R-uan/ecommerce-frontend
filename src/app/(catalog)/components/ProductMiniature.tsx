import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";
import Link from "next/link";
import testimage from "../../../../public/images/product-test-image.jpg";
import s from "./product-mini.module.scss";
export default function ProductMiniature({ data }: { data: IProduct }) {
	return (
		<Link className="w-fit h-fit" href={`/catalog/${data.id}`}>
			<div className={s.miniature}>
				<div className={s.image}>
					{data.availability ? null : (
						<div>
							<h3 className="font-bebas">NOT AVAILABLE</h3>
						</div>
					)}
					<span>{data.category}</span>
					<Image fill={true} src={testimage} alt={data.name}></Image>
				</div>
				<div className={s.information}>
					<div>
						<h3 className="font-kode">{data.name}</h3>
						<h6 className="font-kode">{data.manufacturer}</h6>
						<span className="font-kode">${data.unit_price}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
