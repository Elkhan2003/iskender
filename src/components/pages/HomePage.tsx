import { FC } from "react";
import SurpriseSection from "./home_sections/SurpriseSection";
import CategorySection from "./home_sections/CategorySection";
import SalesHitSection from "./home_sections/SalesHitSession";
import NewsSection from "./home_sections/NewsSection";
import AuctionSection from "./home_sections/AuctionSection";
import StoreAddressSection from "./home_sections/StoreAddressSection";

const HomePage: FC = () => {
	return (
		<div style={{ paddingTop: 95 }}>
			<SurpriseSection />
			<CategorySection />
			<SalesHitSection />
			<NewsSection />
			<AuctionSection />
			<StoreAddressSection />
		</div>
	);
};

export default HomePage;
