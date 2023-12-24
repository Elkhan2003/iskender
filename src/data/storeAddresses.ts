import photo_1 from "@/src/assets/icon_logo.svg";

interface DataStoreAddressesType {
	id: number;
	name: string;
	logo: string;
	map: string;
	city: string;
	address: string;
	time: string;
	phone: string;
}

export const dataStoreAddresses: DataStoreAddressesType[] = [
	{
		id: 1,
		name: "Iskender home",
		logo: photo_1,
		map: "https://2gis.kg/bishkek",
		city: "Кыргызстан, г. Бишкек",
		address: "ул. Турусбекова A167",
		time: "08:00 - 22:00",
		phone: "+996 500 345 345"
	},
	{
		id: 2,
		name: "Iskender home",
		logo: photo_1,
		map: "https://2gis.kg/bishkek",
		city: "Кыргызстан, г. Бишкек",
		address: "ул. Лермонтова 6",
		time: "08:00 - 22:00",
		phone: "+996 500 345 345"
	},
	{
		id: 3,
		name: "Iskender home",
		logo: photo_1,
		map: "https://2gis.kg/bishkek",
		city: "Кыргызстан, г. Бишкек",
		address: "ул. Льва-Толстого 19",
		time: "08:00 - 22:00",
		phone: "+996 500 345 345"
	}
];
