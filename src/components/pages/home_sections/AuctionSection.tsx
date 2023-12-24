import { FC } from "react";
import scss from "@/src/components/pages/home_sections/AuctionSection.module.scss";
import { dataAuctionItems } from "@/src/data/auctionItems";
import {
	IsLikeTrueIcon,
	IsLikeFalseIcon,
	ArrowLeftIcon,
	ArrowRightIcon
} from "@/src/assets/icons";

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
											{item.isLike ? (
												<img src={IsLikeTrueIcon} alt={`like ${item.isLike}`} />
											) : (
												<img
													src={IsLikeFalseIcon}
													alt={`like ${item.isLike}`}
												/>
											)}
										</div>
										<img
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
											{item.isStock ? "В наличии" : "Нет в наличии"}
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
											<button className={scss.button}>+</button>
											<p className={scss.quantity}>{item.quantity}</p>
											<button className={scss.button}>-</button>
										</div>
									</div>
								</div>
							))}
							<div className={scss.arrows}>
								<img
									className={`${scss.arrow} ${scss.left}`}
									src={ArrowLeftIcon}
									alt="arrow left"
								/>
								<img
									className={`${scss.arrow} ${scss.right}`}
									src={ArrowRightIcon}
									alt="arrow right"
								/>
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
