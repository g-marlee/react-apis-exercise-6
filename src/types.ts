export interface Quote {
	author: string;
	text: string;
}

export interface ForecastResponse {
	properties: { periods: Period[] };
}

export interface Period {
	name: string;
	temperature: number;
	icon: string;
	detailedForecast: string;
}
