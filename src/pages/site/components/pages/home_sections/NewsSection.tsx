import { FC } from 'react';
import Image from 'next/image';
import scss from './NewsSection.module.scss';
import { dataNews } from '@/data/news';
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';

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
										<Image
											className={scss.img}
											src={item.img}
											alt={item.text}
										/>
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
								<button className={`${scss.arrow} ${scss.left}`}>
									<ArrowLeftIcon />
								</button>
								<button className={`${scss.arrow} ${scss.right}`}>
									<ArrowRightIcon />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default NewsSection;
