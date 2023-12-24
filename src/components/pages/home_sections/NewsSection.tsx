import { FC } from "react";
import scss from "@/src/components/pages/home_sections/NewsSection.module.scss";
import { dataNews } from "@/src/data/news";
import { ArrowLeftIcon, ArrowRightIcon } from "@/src/assets/icons";

const NewsSection: FC = () => {
	return (
		<>
			<section className={scss.section}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>Новости</h1>
						<div className={scss.news_list}>
							{dataNews.map((item, index) => (
								<div
									key={index}
									className={
										item.isLoad ? `${scss.news} ${scss.active}` : `${scss.news}`
									}
								>
									{item.isLoad && (
										<h1 className={scss.discount}>{item.discount}%</h1>
									)}
									{item.isLoad && <p className={scss.text}>${item.text}</p>}
									{item.isLoad && (
										<img className={scss.img} src={item.img} alt={item.text} />
									)}
									{item.isLoad && (
										<button className={scss.button}>Подробнее</button>
									)}
									{item.isLoad && (
										<span className={`${scss.circle} ${scss.left}`}></span>
									)}
									{item.isLoad && (
										<span className={`${scss.circle} ${scss.right}`}></span>
									)}
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
					</div>
				</div>
			</section>
		</>
	);
};

export default NewsSection;
