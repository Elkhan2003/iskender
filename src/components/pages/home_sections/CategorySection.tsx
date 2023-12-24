import { FC } from "react";
import scss from "@/src/components/pages/home_sections/CategorySection.module.scss";
import { dataCategories } from "@/src/data/categories";

const CategorySection: FC = () => {
	return (
		<>
			<section className={scss.section}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>Категории</h1>
						<div className={scss.categories}>
							{dataCategories.map((item, index) => (
								<div key={index} className={scss.category}>
									<div className={scss.text_info}>
										<h1 className={scss.name}>{item.name}</h1>
										<p className={scss.quantity}>{item.quantity} товаров</p>
									</div>
									<div className={scss.img_info}>
										<img
											className={scss.photo}
											src={item.img}
											alt={item.name}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CategorySection;
