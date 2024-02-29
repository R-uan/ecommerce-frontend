import Rating from "./Rating";

export default function UserReview() {
	return (
		<div className="w-[480px] bg-[#FCEE09] p-[15px] rounded-md">
			<div className="flex w-full justify-between">
				<h3 className="text-[1.6vw] font-bold leading-snug text-[#2E3840]">User Name</h3>
				<Rating fill="#2E3840" />
			</div>
			<p className="text-[1.3vw] leading-snug text-[#2E3840]">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, nam pariatur
				labore sunt a, odio adipisci amet delectus laborum sit quibusdam corporis, ad earum
				dolore deserunt in quos ipsum provident?
			</p>
		</div>
	);
}
