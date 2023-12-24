import { FC } from "react";
import scss from "./Footer.module.scss";
import logo from "@/src/assets/logo.svg";
import { InstagramIcon, FacebookIcon } from "@/src/assets/icons";
import apple from "@/src/assets/apple.svg";
import google from "@/src/assets/google.svg";
import whats_app from "@/src/assets/whats_app.svg";

const Footer: FC = () => {
	return (
		<>
			<footer className={scss.footer}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.top}>
							<div className={scss.block_1}>
								<img className={scss.logo} src={logo} alt="logo" />
								<p className={scss.text}>
									Первый отечественный бренд Iskender на рынке сантехники от
									компании ОсОО «Стройдом.кг»
								</p>
								<div className={scss.apps}>
									<a href="#">
										<img src={apple} alt="apple" />
									</a>
									<a href="#">
										<img src={google} alt="google" />
									</a>
								</div>
							</div>
							<div className={scss.block_2}>
								<h1 className={scss.title}>Адреса</h1>
								<div className={scss.addresses}>
									<div className={scss.info}>
										<p className={scss.name}>ЭлитСтрой</p>
										<p className={scss.address}>ул. Ден-Сяопина 18/1</p>
									</div>
									<div className={scss.info}>
										<p className={scss.name}>Баткен</p>
										<p className={scss.address}>ул. Льва-Толстого 19</p>
									</div>
									<div className={scss.info}>
										<p className={scss.name}>ТааТан</p>
										<p className={scss.address}>ул. Лермонтова 6</p>
									</div>
								</div>
							</div>
							<div className={scss.block_3}>
								<h1 className={scss.title}>Компания</h1>
								<div className={scss.nav_links}>
									<a className={scss.link} href="#">
										Каталог
									</a>
									<a className={scss.link} href="#">
										Избранное
									</a>
									<a className={scss.link} href="#">
										Личный кабинет
									</a>
								</div>
							</div>
							<div className={scss.block_4}>
								<h1 className={scss.title}>Контакты</h1>
								<div className={scss.contacts}>
									<div className={scss.contact_block}>
										<p className={scss.way_contact}>Email:</p>
										<p className={scss.address}>iskender.kg@gmail.com</p>
									</div>
									<div className={scss.contact_block}>
										<p className={scss.way_contact}>Телефон:</p>
										<p className={scss.number}>+996 (500) 000-104</p>
										<p className={scss.number}>+996 (997) 000-104</p>
										<p className={scss.number}>+996 (222) 000-104</p>
									</div>
								</div>
								<a className={scss.whats_app} href="#">
									<img src={whats_app} alt="whatsapp" />
								</a>
							</div>
						</div>
						<span className={scss.line}></span>
						<div className={scss.bottom}>
							<div className={scss.left}>
								<p className={scss.text}>
									© 2023 Iskender.kg - Отечественный бренд сантехники
								</p>
							</div>
							<div className={scss.right}>
								<div className={scss.contact_icons}>
									<a href="#">
										<img src={InstagramIcon} alt="instagram" />
									</a>
									<a href="#">
										<img src={FacebookIcon} alt="facebook" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
