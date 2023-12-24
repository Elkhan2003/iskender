import photo_1 from "@/src/assets/surprises/photo_1.png";
import photo_2 from "@/src/assets/surprises/photo_2.png";
import photo_3 from "@/src/assets/surprises/photo_3.png";
import photo_4 from "@/src/assets/surprises/photo_4.png";
import photo_5 from "@/src/assets/surprises/photo_5.png";

interface DataSurpriseType {
	id: number;
	img: string;
	text: string;
	isLoad: boolean;
}

export const dataSurprise: DataSurpriseType[] = [
	{
		id: 1,
		img: photo_1,
		text: "Скидки",
		isLoad: true
	},
	{
		id: 2,
		img: photo_2,
		text: "Акции",
		isLoad: true
	},
	{
		id: 3,
		img: photo_3,
		text: "Распродажа",
		isLoad: true
	},
	{
		id: 4,
		img: photo_4,
		text: "Подарки",
		isLoad: true
	},
	{
		id: 5,
		img: photo_5,
		text: "Подарки",
		isLoad: true
	},
	{
		id: 6,
		img: "https//:",
		text: "https://",
		isLoad: false
	},
	{
		id: 7,
		img: "https//:",
		text: "https://",
		isLoad: false
	},
	{
		id: 8,
		img: "https//:",
		text: "https://",
		isLoad: false
	},
	{
		id: 9,
		img: "https//:",
		text: "https://",
		isLoad: false
	},
	{
		id: 10,
		img: "https//:",
		text: "https://",
		isLoad: false
	},
	{
		id: 11,
		img: "https//:",
		text: "https://",
		isLoad: false
	},
	{
		id: 12,
		img: "https//:",
		text: "https://",
		isLoad: false
	},
	{
		id: 13,
		img: "https//:",
		text: "https://",
		isLoad: false
	},
	{
		id: 14,
		img: "https//:",
		text: "https://",
		isLoad: false
	}
];
