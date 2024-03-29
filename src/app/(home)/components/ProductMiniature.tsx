import Image from "next/image";
import s from "../styles/featured-products.module.scss";
import testimage from "../../../../public/images/product-test-image.jpg";

export default function ProductMiniature() {
	return (
		<div className={s.product}>
			<div>
				<Image alt="img test" className="object-cover" fill={true} src={testimage} />
			</div>
			<div>
				<h1>Name of the Ship</h1>
				<p>$Price</p>
			</div>
		</div>
	);
}
