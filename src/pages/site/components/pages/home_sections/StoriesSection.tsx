import { FC } from 'react';
import Image from 'next/image';
import scss from './StoriesSection.module.scss';
import { dataSurprise } from '@/data/surprise';
import photo_loading from '@/assets/surprises/photo_loading.png';
import text_loading from '@/assets/surprises/text_loading.png';

const StoriesSection: FC = () => {
	return (
		<>
			<section className={scss.section}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.surprises}>
							{dataSurprise.map((item, index) => (
								<div key={index} className={scss.surprise}>
									{item.isLoad ? (
										<Image
											className={scss.photo}
											src={item.img}
											alt={item.text}
										/>
									) : (
										<Image
											className={scss.photo}
											src={photo_loading}
											alt="loading..."
										/>
									)}

									{item.isLoad ? (
										<p className={scss.text}>{item.text}</p>
									) : (
										<Image
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

export default StoriesSection;
