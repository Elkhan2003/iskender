import { FC } from "react";
import scss from "@/src/components/pages/home_sections/SalesHitSection.module.scss";
import { dataSalesHits } from "@/src/data/salesHits";
import {
	IsLikeTrueIcon,
	IsLikeFalseIcon,
	ArrowLeftIcon,
	ArrowRightIcon
} from "@/src/assets/icons";

const SalesHitSection: FC = () => {
	return (
		<>
			<section className={scss.section}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>Хиты продаж</h1>
						<div className={scss.sales_hits}>
							{dataSalesHits.map((item, index) => (
								<div key={index} className={scss.sales_hit}>
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
										<h2 className={scss.price}>{item.price} c</h2>
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

export default SalesHitSection;
