import styles from "@/styles/sign-in.module.scss";
import Link from "next/link";

export default function Login() {
	return (
		<>
			<body className={styles.body}>
				<main className={styles.main}>
					<div className={styles.logo}>
						<Link href={"/"}>LOGO</Link>
					</div>
					<div className={styles.main_content}>
						<span>Sign in to your Gemini account</span>
						<form action="POST" className={styles.form}>
							<div className={styles.form_field}>
								<label htmlFor="email">Email</label>
								<input id="email" type="email" />
							</div>
							<div className={styles.form_field}>
								<label htmlFor="password">Password</label>
								<input id="password" type="password" />
							</div>
							<div className={styles.form_options}>
								<label htmlFor="remember">
									<input type="checkbox" name="Remember me" id="remember" />
									Remember me
								</label>
								<button>Forgot password ?</button>
							</div>
							<div className={styles.submit_form}>
								<input type="button" value="Sign in" />
							</div>
						</form>
						<div className={styles.sign_up}>
							<h3>New user ?</h3>
							<button type="button">Sign up</button>
						</div>
					</div>
				</main>
			</body>
		</>
	);
}
