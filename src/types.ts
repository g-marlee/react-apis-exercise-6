export interface Quote {
    author: string;
    text: string;
}

export interface ForecastResponse {
    properties: Properties[]
}

export interface Properties {
    periods: Periods[]
}

export interface Periods {
    name: string;
    temperature: number;
    icon: string;
    detailedForecast: string;
}