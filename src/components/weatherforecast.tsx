import { useEffect, useState } from "react";
import { fetchAllForecasts, fetchAllPeriods, fetchAllProperties } from "../services/forecast.services";
import { Periods } from "../types";

export function WeatherForecast() {
    const [weather, setWeather] = useState<Periods[]>([]);

    useEffect(() => {
        getAllForecasts();
        getAllProperties();
        getAllPeriods();
    }, []);

    function getAllForecasts() {
        fetchAllPeriods().then(response => console.log(response.data));
    }

    function getAllProperties() {
        fetchAllProperties().then(response => console.log(response.data));
    }

    function getAllPeriods() {
        fetchAllPeriods().then(response => console.log(response.data));
    }


    return (
        <>
            <h1>Forecast</h1>
            <ul>
            {weather.map(forecast => (
                <li>
                    {forecast.name}
                    {forecast.temperature}
                    {forecast.icon}
                    {forecast.detailedForecast}
                </li>
                ))}
            </ul>
            
            
        </>
    )

}