import { FC, useState } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

export interface IsOpenProps {
	isOpen: boolean;
	setIsOpen: (param: boolean) => void;
}

const Layout: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const props = {
		isOpen,
		setIsOpen
	};

	return (
		<div className={scss.layout}>
			<header>
				<Header {...props} />
			</header>
			<main>
				<Main />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};
export default Layout;
