import { useEffect, useState } from "react";
import { fetchAllForecasts } from "../services/forecast.services";
import { Period } from "../types";

export function WeatherForecast() {
	const [weather, setWeather] = useState<Period[]>([]);

	useEffect(() => {
		getAllForecasts();
	}, []);

	function getAllForecasts() {
		fetchAllForecasts().then((response) => {
			setWeather(response.data.properties.periods);
		});
	}

	return (
		<>
			<h1>Forecast</h1>
			<ul>
				{weather.map((forecast) => (
					<div
						style={{
							border: "1px solid gray",
							width: "50%",
							marginBottom: "5px",
							paddingLeft: "5px",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								paddingTop: "5px",
							}}
						>
							<h3>{forecast.name}</h3>
							<img src={forecast.icon} />
						</div>

						<p style={{ fontWeight: "bold" }}>
							Temperature: {forecast.temperature} F
						</p>
						<p>{forecast.detailedForecast}</p>
					</div>
				))}
			</ul>
		</>
	);
}
