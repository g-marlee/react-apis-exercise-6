import axios from "axios";
import { ForecastResponse, Periods, Properties } from "../types";

export function fetchAllForecasts() {
    return axios.get<ForecastResponse[]>("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then(response => response);
}

export function fetchAllProperties() {
    return axios.get<Properties[]>("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then(response => response);
}

export function fetchAllPeriods() {
    return axios.get<Periods[]>("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then(response => response);
}