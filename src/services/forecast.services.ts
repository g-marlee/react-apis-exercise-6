import axios from "axios";
import { ForecastResponse } from "../types";

export function fetchAllForecasts() {
	return axios
		.get<ForecastResponse>(
			"https://api.weather.gov/gridpoints/DTX/65,33/forecast"
		)
		.then((response) => response);
}
