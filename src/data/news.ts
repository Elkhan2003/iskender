import photo_1 from "@/src/assets/news/illustration.png";

interface DataNewsType {
	id: number;
	img: string;
	discount: string;
	text: string;
	isLoad: boolean;
}

export const dataNews: DataNewsType[] = [
	{
		id: 1,
		img: photo_1,
		discount: "-50",
		text: "На кухонную мебель",
		isLoad: true
	},
	{
		id: 2,
		img: photo_1,
		discount: "-50",
		text: "На кухонную мебель",
		isLoad: true
	},
	{
		id: 3,
		img: photo_1,
		discount: "-50",
		text: "На кухонную мебель",
		isLoad: false
	}
];
