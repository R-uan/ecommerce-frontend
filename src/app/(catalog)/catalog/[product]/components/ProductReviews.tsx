import UserReview from "./UserReview";
import styles from "../singular-product.module.scss";

export default function ProductReviews() {
	return (
		<section className="gap-[15px] flex flex-col">
			<h1 className="text-[2vw] w-full font-bebas text-[#FF003C]">Reviews</h1>
			<div className="flex flex-col w-full gap-5">
				<div className={styles.user_reviews}>
					<UserReview />
					<UserReview />
					<UserReview />
					<UserReview />
				</div>
			</div>
		</section>
	);
}
