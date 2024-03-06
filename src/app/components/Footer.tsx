import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import styles from "./footer.module.scss";
export default function Footer() {
	const constitutional = [
		{ name: "About Gemini", link: "" },
		{ name: "Privacy Notice", link: "" },
	];
	return (
		<footer className="w-full flex mt-[20px] h-fit items-center bg-[#eeeeee] justify-between p-5 text-all-black">
			<div className="flex flex-col h-fit">
				<h3 className="text-[2vw] leading-snug">Legal Information</h3>
				<ul className="h-fit">
					{constitutional.map((a, key) => {
						return (
							<Link key={key} href={a.link}>
								<li className="text-[1.5vw] leading-snug">{a.name}</li>
							</Link>
						);
					})}
				</ul>
			</div>
			<div className="flex flex-col gap-[5px] items-end">
				<ul className="text-right">
					<li key={"email"} className="text-[1.5vw] leading-snug ">
						gemini@contact.com
					</li>
					<li key={"phone"} className="text-[1.5vw] leading-snug">
						Pluto +55 (71) 0000-0000
					</li>
					<li key={"address"} className="text-[1.5vw] leading-snug">
						Vedalis Crate 47, Sector 7, Pluto
					</li>
				</ul>
				<div className="flex justify-between w-full">
					<FaInstagram className="text-[2vw]" />
					<FaGithub className="text-[2vw]" />
					<FaFacebook className="text-[2vw]" />
					<FaLinkedin className="text-[2vw]" />
				</div>
			</div>
		</footer>
	);
}
