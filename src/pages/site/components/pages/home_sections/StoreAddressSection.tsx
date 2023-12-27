import { FC } from 'react';
import Image from 'next/image';
import scss from './StoreAddressSection.module.scss';
import { dataStoreAddresses } from '@/data/storeAddresses';
import {
	ArrowLeftMiniIcon,
	LocationIcon,
	ClockSquareIcon,
	CallIcon
} from '@/assets/icons';

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
											<Image
												className={scss.logo}
												src={item.photo}
												alt={item.name}
											/>
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
												<ArrowLeftMiniIcon />
											</button>
										</div>
									</div>
									<span className={scss.line}></span>
									<div className={scss.bottom}>
										<div className={scss.address}>
											<LocationIcon />
											<div>
												<p className={scss.text}>{item.city}</p>
												<p className={scss.text}>{item.address}</p>
											</div>
										</div>
										<div className={scss.time_call}>
											<div className={scss.time}>
												<ClockSquareIcon />
												<p className={scss.time_info}>{item.time}</p>
											</div>
											<div className={scss.call}>
												<CallIcon />
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
