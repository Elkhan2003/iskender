import { useState, FC, useEffect } from "react";
import scss from "./Header.module.scss";
import axios from "axios";
import { IsOpenProps } from "../Layout";
import logo from "@/src/assets/logo.svg";
import search from "@/src/assets/icons/search.svg";
import user_photo from "@/src/assets/icons/user-photo.svg";
import user_order from "@/src/assets/icons/user-order.svg";
import catalog_button from "@/src/assets/icons/catalog_button.svg";

interface HeaderProps extends IsOpenProps {}

interface UserData {
	id: number;
	firstName: string;
	lastName: string;
	auth: string;
	role: string;
	login: string;
	password: string;
	isActive: boolean;
	photo: string;
	phone: string;
	isPhoneVerified: boolean;
	traffic: string | null;
	createdAt: string;
	updatedAt: string;
}

interface getUserData {
	user: UserData | null;
}

const Header: FC<HeaderProps> = (props) => {
	const [headerScroll, setHeaderScroll] = useState<boolean>(false);
	const [user, setUser] = useState<UserData | null>(null);

	useEffect(() => {
		const loadUserData = async () => {
			try {
				const response = await axios.get<getUserData>(
					`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/user`,
					{
						withCredentials: true
					}
				);
				if (response.data.user) {
					setUser(response.data.user);
					console.log(response.data.user);
				} else {
					setTimeout(loadUserData, 1000);
				}
			} catch (error) {
				console.error(
					"Ошибка при получении информации о пользователе:",
					`${error}`
				);
			}
		};
		loadUserData();
	}, []);

	const login = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/login-google`,
			"_self"
		);
	};

	const logout = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/logout`,
			"_self"
		);
	};

	const changeBackground = () => {
		if (window.scrollY >= 10) {
			setHeaderScroll(true);
		} else {
			setHeaderScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeBackground);

		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	return (
		<header className={scss.header}>
			<div
				className={
					headerScroll
						? `${scss.headerScroll} ${scss.active}`
						: `${scss.headerScroll}`
				}
			>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.logo}>
							<img src={logo} alt="iskender" />
						</div>
						<div className={scss.right}>
							<button className={scss.catalog_button}>
								<img src={catalog_button} alt="catalog button" />
								<span>Каталог</span>
							</button>
							<div className={scss.search_block}>
								<button className={scss.search_button}>
									<img src={search} alt="search" />
								</button>
								<input
									className={scss.search_input}
									type="text"
									placeholder="Поиск"
								/>
								<span className={scss.search_total}>42903</span>
							</div>
							<div className={scss.auth_block}>
								<p className={scss.auth_welcome}>Добро пожаловать</p>
								{user?.isActive ? (
									<div className={scss.user_auth}>
										<div className={scss.user_data}>
											<p>{user.login}</p>
										</div>
										<button onClick={logout}>Log Out</button>
									</div>
								) : (
									<div className={scss.auth_buttons}>
										<button
											onClick={login}
											className={`${scss.auth_button} ${scss.auth_sing_in}`}
										>
											Вход
										</button>
										<span>/</span>
										<button
											onClick={login}
											className={`${scss.auth_button} ${scss.auth_sing_up}`}
										>
											Регистрация
										</button>
									</div>
								)}
							</div>
							<div className={scss.user_block}>
								<div className={scss.user_photo}>
									{user?.isActive ? (
										<img src={user.photo} alt={user.firstName} />
									) : (
										<img src={user_photo} alt="user photo" />
									)}
								</div>
								<span className={scss.height_line}></span>
								<div className={scss.user_order}>
									<img src={user_order} alt="user order" />
									<span className={scss.user_order_total}>2</span>
								</div>
							</div>
						</div>

						{/* ! mobile menu */}
						<div className={scss.mobile_menu}>
							<div className={scss.burger__button}>
								<label>
									<input
										type="checkbox"
										checked={props.isOpen}
										onChange={() => props.setIsOpen(!props.isOpen)}
									/>
									<span></span>
									<span></span>
									<span></span>
								</label>
							</div>

							<div
								className={
									props.isOpen ? `${scss.menu} ${scss.open}` : `${scss.menu}`
								}
							>
								<div className={scss.content}>
									<button className={scss.catalog_button}>
										<img src={catalog_button} alt="catalog button" />
										<span>Каталог</span>
									</button>
									<div className={scss.search_block}>
										<button className={scss.search_button}>
											<img src={search} alt="search" />
										</button>
										<input
											className={scss.search_input}
											type="text"
											placeholder="Поиск"
										/>
										<span className={scss.search_total}>42903</span>
									</div>
									<div className={scss.auth_block}>
										<p className={scss.auth_welcome}>Добро пожаловать</p>
										{user?.isActive ? (
											<div className={scss.user_auth}>
												<div className={scss.user_data}>
													<p>{user.login}</p>
												</div>
												<button onClick={logout}>Log Out</button>
											</div>
										) : (
											<div className={scss.auth_buttons}>
												<button
													onClick={login}
													className={`${scss.auth_button} ${scss.auth_sing_in}`}
												>
													Вход
												</button>
												<span>/</span>
												<button
													onClick={login}
													className={`${scss.auth_button} ${scss.auth_sing_up}`}
												>
													Регистрация
												</button>
											</div>
										)}
									</div>
									<div className={scss.user_block}>
										<div className={scss.user_photo}>
											{user?.isActive ? (
												<img src={user.photo} alt={user.firstName} />
											) : (
												<img src={user_photo} alt="user photo" />
											)}
										</div>
										<span className={scss.height_line}></span>
										<div className={scss.user_order}>
											<img src={user_order} alt="user order" />
											<span className={scss.user_order_total}>2</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
