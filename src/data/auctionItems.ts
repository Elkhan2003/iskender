import photo_1 from "@/src/assets/salesHits/photo_1.png";

interface DataAuctionItemsType {
	id: number;
	img: string;
	text: string;
	price: number;
	reducedPrice: number;
	isLike: boolean;
	isStock: boolean;
	isSet: boolean;
	quantity: number;
}

export const dataAuctionItems: DataAuctionItemsType[] = [
	{
		id: 1,
		img: photo_1,
		text: "Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..",
		price: 1294,
		reducedPrice: 1294,
		isLike: false,
		isStock: true,
		isSet: true,
		quantity: 999
	},
	{
		id: 2,
		img: photo_1,
		text: "Держатель для лейки BOOU PG605 ",
		price: 1294,
		reducedPrice: 500,
		isLike: true,
		isStock: true,
		isSet: true,
		quantity: 0
	},
	{
		id: 3,
		img: photo_1,
		text: "Держатель для лейки ",
		price: 1294,
		reducedPrice: 500,
		isLike: false,
		isStock: false,
		isSet: true,
		quantity: 1
	},
	{
		id: 4,
		img: photo_1,
		text: "Держатель для лейки BOOU PG605 ",
		price: 1294,
		reducedPrice: 500,
		isLike: false,
		isStock: true,
		isSet: true,
		quantity: 1
	},
	{
		id: 5,
		img: photo_1,
		text: "Держатель для лейки BOOU PG605 ",
		price: 1294,
		reducedPrice: 500,
		isLike: false,
		isStock: true,
		isSet: false,
		quantity: 1
	},
	{
		id: 6,
		img: photo_1,
		text: "Держатель для лейки BOOU PG605 ",
		price: 1294,
		reducedPrice: 500,
		isLike: false,
		isStock: true,
		isSet: true,
		quantity: 1
	}
];