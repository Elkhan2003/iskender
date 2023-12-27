'use client';
import React, { FC, useEffect, useState } from 'react';
import scss from './Header.module.scss';
import { IsOpenProps } from '@/pages/site/components/layout/LayoutPage';
import {
	LogoIcon,
	SearchIcon,
	UserPhotoIcon,
	UserOrderIcon,
	CatalogButtonIcon
} from '@/assets/icons';

interface HeaderProps extends IsOpenProps {}

const Header: FC<HeaderProps> = (props) => {
	const [headerScroll, setHeaderScroll] = useState<boolean>(false);
	const changeBackground = () => {
		if (window.scrollY >= 20) {
			setHeaderScroll(true);
		} else {
			setHeaderScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeBackground);

		return () => {
			window.removeEventListener('scroll', changeBackground);
		};
	}, []);
	return (
		<>
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
								<LogoIcon />
							</div>
							<div className={scss.right}>
								<button className={scss.catalog_button}>
									<CatalogButtonIcon />
									<span>Каталог</span>
								</button>
								<div className={scss.search_block}>
									<button className={scss.search_button}>
										<SearchIcon />
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
									<div className={scss.auth_buttons}>
										<button
											className={`${scss.auth_button} ${scss.auth_sing_in}`}
										>
											Вход
										</button>
										<span>/</span>
										<button
											className={`${scss.auth_button} ${scss.auth_sing_up}`}
										>
											Регистрация
										</button>
									</div>
								</div>
								<div className={scss.user_block}>
									<div className={scss.user_photo}>
										<UserPhotoIcon />
									</div>
									<span className={scss.height_line}></span>
									<div className={scss.user_order}>
										<UserOrderIcon />
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
											<CatalogButtonIcon />
											<span>Каталог</span>
										</button>
										<div className={scss.search_block}>
											<button className={scss.search_button}>
												<SearchIcon />
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
											<div className={scss.auth_buttons}>
												<button
													className={`${scss.auth_button} ${scss.auth_sing_in}`}
												>
													Вход
												</button>
												<span>/</span>
												<button
													className={`${scss.auth_button} ${scss.auth_sing_up}`}
												>
													Регистрация
												</button>
											</div>
										</div>
										<div className={scss.user_block}>
											<div className={scss.user_photo}>
												<UserPhotoIcon />
											</div>
											<span className={scss.height_line}></span>
											<div className={scss.user_order}>
												<UserOrderIcon />
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
		</>
	);
};
export default Header;
