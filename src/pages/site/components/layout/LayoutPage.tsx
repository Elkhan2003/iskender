'use client';
import React, { FC, ReactNode, useState } from 'react';
import scss from './LayoutPage.module.scss';
import Header from '@/pages/site/components/layout/header/Header';
import Footer from '@/pages/site/components/layout/footer/Footer';

interface LayoutPageType {
	children: ReactNode;
}

export interface IsOpenProps {
	isOpen: boolean;
	setIsOpen: (param: boolean) => void;
}

const LayoutPage: FC<LayoutPageType> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const props = {
		isOpen,
		setIsOpen
	};

	return (
		<>
			<div className={scss.layout}>
				<header>
					<Header {...props} />
				</header>
				<main style={{ paddingTop: 95 }}>{children}</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
};
export default LayoutPage;
