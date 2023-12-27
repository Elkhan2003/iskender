import { StaticImageData } from 'next/image';
import photo_1 from '@/assets/categories/photo_1.png';
import photo_2 from '@/assets/categories/photo_2.png';
import photo_3 from '@/assets/categories/photo_3.png';
import photo_4 from '@/assets/categories/photo_4.png';
import photo_5 from '@/assets/categories/photo_5.png';
import photo_6 from '@/assets/categories/photo_6.png';
import photo_7 from '@/assets/categories/photo_7.png';
import photo_8 from '@/assets/categories/photo_8.png';
import photo_9 from '@/assets/categories/photo_9.png';
import photo_10 from '@/assets/categories/photo_10.png';
import photo_11 from '@/assets/categories/photo_11.png';
import photo_12 from '@/assets/categories/photo_12.png';
import photo_13 from '@/assets/categories/photo_13.png';
import photo_14 from '@/assets/categories/photo_14.png';

interface DataCategoriesType {
	id: number;
	name: string;
	quantity: number;
	img: StaticImageData;
}

export const dataCategories: DataCategoriesType[] = [
	{
		id: 1,
		name: 'Ванны',
		quantity: 3000,
		img: photo_1
	},
	{
		id: 2,
		name: 'Смесители',
		quantity: 3000,
		img: photo_2
	},
	{
		id: 3,
		name: 'Вытяжки для кухни',
		quantity: 3000,
		img: photo_3
	},
	{
		id: 4,
		name: 'Кухонные мойки',
		quantity: 3000,
		img: photo_4
	},
	{
		id: 5,
		name: 'Другие',
		quantity: 3000,
		img: photo_5
	},
	{
		id: 6,
		name: 'Унитазы',
		quantity: 3000,
		img: photo_6
	},
	{
		id: 7,
		name: 'Вытяжки для кухни',
		quantity: 3000,
		img: photo_7
	},
	{
		id: 8,
		name: 'Умывальники',
		quantity: 3000,
		img: photo_8
	},
	{
		id: 9,
		name: 'Полотенцесушители',
		quantity: 3000,
		img: photo_9
	},
	{
		id: 10,
		name: 'Водонагреватели',
		quantity: 3000,
		img: photo_10
	},
	{
		id: 11,
		name: 'Душевые',
		quantity: 3000,
		img: photo_11
	},
	{
		id: 12,
		name: 'Водонагреватели',
		quantity: 3000,
		img: photo_12
	},
	{
		id: 13,
		name: 'Водонагреватели',
		quantity: 3000,
		img: photo_13
	},
	{
		id: 14,
		name: 'Полотенцесушители',
		quantity: 3000,
		img: photo_14
	}
];
