import { FaGithub } from "react-icons/fa6";
import styles from "./page.module.scss";
import Image from "next/image";
import { FaUserEdit } from "react-icons/fa";
export default function Profile() {
	return (
		<main className="flex items-center relative w-full h-[90vh] min-h-[90vh] bg-[#050a0e]">
			<div className={styles.menu}>
				<button type="button">
					<span>
						<FaGithub className={styles.icon} />
						Teste Opção
					</span>
				</button>
			</div>
			<div className={styles.dashboard}>
				<div className="flex h-[17vh] flex-col w-full justify-evenly">
					<div className="h-fit w-full flex justify-between">
						<section className={styles.user}>
							<div>
								<Image
									className={styles.pfp}
									src={""}
									alt="profile-picture"></Image>
							</div>
							<div className={styles.user_information}>
								<h3>Full name</h3>
								<span>emailemailemailemail@gmail.com</span>
							</div>
							<div className="ml-[20px] flex items-center h-full">
								<button>
									<FaUserEdit size={40} fill="black" />
								</button>
							</div>
						</section>
						<section className={styles.last_order}>
							<h3 className="text-left w-full text-[2vw] leading-[2vw] font-bebas">
								Most Recent Order
							</h3>
							<div className="flex w-full gap-[20px]">
								<div className="w-[50%]">
									<h1 className="text-[1.7vw] leading-[1.7vw]">
										Order ID: #12345
									</h1>
									<h3 className="text-[1.7vw] leading-[1.7vw]">
										Order Total: $1000000
									</h3>
								</div>
								<div className="w-[45%]">
									<h3 className="text-[1.7vw] leading-[1.7vw]">
										Order Status: Ongoing
									</h3>
									<h4 className="text-[1.7vw] leading-[1.7vw]">
										Order Date: 17/06/2024
									</h4>
								</div>
							</div>
						</section>
					</div>
				</div>
				<div className={styles.bb}>
					<div className="ml-[20px] mb-[10px]">
						<span className="text-[2vw] leading-[2vw] text-black font-bebas">
							Orders
						</span>
					</div>
					<div className="w-full gap-[20px] flex items-center h-[100px] bg-[#eeeeee]">
						<div className="pl-[20px] flex flex-row gap-[50px]">
							<div>
								<p className="text-[1.75vw] leading-[1.75vw]">Order ID</p>
								<span className="text-[1.75vw] leading-[1.75vw]">#12345678</span>
							</div>
							<div>
								<p className="text-[1.75vw] leading-[1.75vw]">Order ID</p>
								<span className="text-[1.75vw] leading-[1.75vw]">#12345678</span>
							</div>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</main>
	);
}
