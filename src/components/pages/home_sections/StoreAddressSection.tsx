import { FC } from "react";
import scss from "@/src/components/pages/home_sections/StoreAddressSection.module.scss";
import { dataStoreAddresses } from "@/src/data/storeAddresses";
import {
	ArrowLeftMiniIcon,
	LocationIcon,
	ClockSquareIcon,
	CallIcon
} from "@/src/assets/icons";

const StoreAddressSection: FC = () => {
	return (
		<>
			<section className={scss.section}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>Адреса магазинов</h1>
						<div className={scss.store_addresses}>
							{dataStoreAddresses.map((item, index) => (
								<div key={index} className={scss.store_address}>
									<div className={scss.top}>
										<div className={scss.left}>
											<img src={item.logo} alt={item.name} />
											<div className={scss.info}>
												<h1 className={scss.name}>{item.name}</h1>
												<a
													className={scss.link}
													href={item.map}
													target="_blank"
												>
													открыть в карте
												</a>
											</div>
										</div>
										<div className={scss.right}>
											<button className={scss.details_button}>
												<img src={ArrowLeftMiniIcon} alt="arrow right" />
											</button>
										</div>
									</div>
									<span className={scss.line}></span>
									<div className={scss.bottom}>
										<div className={scss.address}>
											<img src={LocationIcon} alt="location icon" />
											<div>
												<p className={scss.text}>{item.city}</p>
												<p className={scss.text}>{item.address}</p>
											</div>
										</div>
										<div className={scss.time_call}>
											<div className={scss.time}>
												<img
													className={scss.time_icon}
													src={ClockSquareIcon}
													alt="time icon"
												/>
												<p className={scss.time_info}>{item.time}</p>
											</div>
											<div className={scss.call}>
												<img
													className={scss.call_icon}
													src={CallIcon}
													alt="call icon"
												/>
												<p className={scss.call_phone}>{item.phone}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className={scss.dots}>
							<span className={scss.dot}></span>
							<span className={`${scss.dot} ${scss.active}`}></span>
							<span className={scss.dot}></span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default StoreAddressSection;
