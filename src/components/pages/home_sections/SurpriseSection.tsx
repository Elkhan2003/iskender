import { FC } from "react";
import scss from "@/src/components/pages/home_sections/SurpriseSection.module.scss";
import { dataSurprise } from "@/src/data/surprise";
import photo_loading from "@/src/assets/surprises/photo_loading.png";
import text_loading from "@/src/assets/surprises/text_loading.png";

const SurpriseSection: FC = () => {
	return (
		<>
			<section className={scss.section}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.surprises}>
							{dataSurprise.map((item, index) => (
								<div key={index} className={scss.surprise}>
									{item.isLoad ? (
										<img
											className={scss.photo}
											src={item.img}
											alt={item.text}
										/>
									) : (
										<img
											className={scss.photo}
											src={photo_loading}
											alt="loading..."
										/>
									)}

									{item.isLoad ? (
										<p className={scss.text}>{item.text}</p>
									) : (
										<img
											className={scss.text}
											src={text_loading}
											alt="loading..."
										/>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SurpriseSection;
