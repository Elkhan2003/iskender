import React, { FC } from 'react';
import scss from './Style.module.scss';
import StoriesSection from '@/pages/site/components/pages/home_sections/StoriesSection';
import CategorySection from '@/pages/site/components/pages/home_sections/CategorySection';
import SalesHitSection from '@/pages/site/components/pages/home_sections/SalesHitSession';
import NewsSection from '@/pages/site/components/pages/home_sections/NewsSection';
import AuctionSection from '@/pages/site/components/pages/home_sections/AuctionSection';
import StoreAddressSection from '@/pages/site/components/pages/home_sections/StoreAddressSection';

const HomePage: FC = () => {
	return (
		<>
			<StoriesSection />
			<div className={scss.background}>
				<CategorySection />
				<SalesHitSection />
				<NewsSection />
				<AuctionSection />
				<StoreAddressSection />
			</div>
		</>
	);
};
export default HomePage;
