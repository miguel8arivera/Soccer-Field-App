export interface SoccerField {
	id: number;
	star: number;
	title: string;
	description: string;
	price: number;
	available: boolean;
	latitude: number;
	longitude: number;
}

export interface Props {
	title?: string;
}

export interface Maps {
	lat: number;
	lng: number;
	text: string;
}
