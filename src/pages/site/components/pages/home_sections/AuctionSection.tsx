import { FC } from 'react';
import Image from 'next/image';
import scss from './AuctionSection.module.scss';
import { dataAuctionItems } from '@/data/auctionItems';
import {
	IsLikeTrueIcon,
	IsLikeFalseIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	PlusIcon,
	MinusIcon
} from '@/assets/icons';

const AuctionSection: FC = () => {
	return (
		<>
			<section className={scss.section}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>Аукционные товары</h1>
						<div className={scss.auction_items}>
							{dataAuctionItems.map((item, index) => (
								<div key={index} className={scss.auction_item}>
									<div className={scss.top}>
										<div className={scss.like}>
											{item.isLike ? <IsLikeTrueIcon /> : <IsLikeFalseIcon />}
										</div>
										<Image
											className={scss.photo}
											src={item.img}
											alt={item.text}
										/>
										<h1 className={scss.text}>{item.text}</h1>
									</div>
									<div className={scss.bottom}>
										<div className={scss.prices}>
											<h2 className={scss.reduced_price}>
												{item.reducedPrice} c
											</h2>
											<h3 className={scss.price}>{item.price} c</h3>
										</div>
										<p
											className={
												item.isStock
													? `${scss.isStock} ${scss.active}`
													: `${scss.isStock}`
											}
										>
											{item.isStock ? 'В наличии' : 'Нет в наличии'}
										</p>
										<p
											className={
												item.isSet
													? `${scss.isSet} ${scss.active}`
													: `${scss.isSet}`
											}
										>
											Комплект
										</p>
										<div className={scss.counter}>
											<button className={scss.button}>
												<PlusIcon />
											</button>
											<p className={scss.quantity}>{item.quantity}</p>
											<button className={scss.button}>
												<MinusIcon />
											</button>
										</div>
									</div>
								</div>
							))}
							<div className={scss.arrows}>
								<button className={`${scss.arrow} ${scss.left}`}>
									<ArrowLeftIcon />
								</button>
								<button className={`${scss.arrow} ${scss.right}`}>
									<ArrowRightIcon />
								</button>
							</div>
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

export default AuctionSection;
