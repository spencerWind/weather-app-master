import React, { useEffect, useRef, useState } from "react";
import clearSky from "../assets/clearSky.png";
import API from "../Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CurrentWeather from "../currentWeather";

const api = new API();

const Diplay = ({ location, locations, setLocations }) => {
    const [weatherData, setWeatherData] = useState("");
    const navigate = useNavigate();
    const videoRef = useRef();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const city = location.Location;
        const unit = "imperial";

        try {
            const currentWeather = await api.getCurrentWeatherData(city, unit);
            console.log("Weather Data", currentWeather);
            setWeatherData(currentWeather);
        } catch (err) {
            console.log("Error:", err);
        }
    }

    async function deleteLocation() {
        await axios
            .delete(`http://localhost:8000/api/weather/${location._id}`)
            .then((res) => {
                console.log("success", res);
                setLocations(
                    locations.filter(
                        (eachLocation) => eachLocation._id !== location._id
                    )
                );
            })
            .catch((err) => console.log(err));
    }

    function formatUnixTimestamp(unixTimestamp, timezoneOffsetInSeconds) {
        const date = new Date(unixTimestamp * 1000);

        // Apply the timezone offset to the date
        const timezoneOffsetMilliseconds = timezoneOffsetInSeconds * 1000;
        const offsetDate = new Date(
            date.getTime() + timezoneOffsetMilliseconds
        );

        const formattedTime = new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timeZone: "UTC",
        }).format(offsetDate);

        return formattedTime;
    }

    function generateUrl() {
        const weatherCondition = api.getWeatherConditionImg(
            weatherData.weather[0].main,
            weatherData.sys.sunrise,
            weatherData.sys.sunset,
            weatherData.timezone
        );
        console.log(weatherCondition);
        const videoUrl = api.getBackgroundVideoLink(weatherCondition);
        return videoUrl;
    }

    return (
        <div className="w-96 rounded-lg p-4 bg-display text-slate-900">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-3xl">{location.title}</h1>
                    <h2 className="font-light">
                        {weatherData && weatherData.name}
                    </h2>
                </div>
                <span className="text-3xl font-black">
                    {weatherData && weatherData.main.temp} F
                </span>
            </div>
            {weatherData && (
                <iframe
                    ref={videoRef}
                    src={generateUrl()}
                    title="Background video"
                    className="h-64 w-full mb-4"
                    allow="autoplay; encrypted-media"
                />
            )}

            <div className="flex justify-between mb-8 font-light">
                <div className="">
                    <p className="text-sm">
                        Feels like:{" "}
                        <span className="font-medium text-base">
                            {weatherData && weatherData.main.feels_like} F
                        </span>
                    </p>
                    <p className="text-sm">
                        Humidity:{" "}
                        <span className="font-medium text-base">
                            {weatherData && weatherData.main.humidity}%
                        </span>
                    </p>
                    <p className="text-sm">
                        Pressure:{" "}
                        <span className="font-medium text-base">
                            {weatherData && weatherData.main.pressure} hPa
                        </span>
                    </p>
                </div>
                <div>
                    <p className="text-sm">
                        Sunrise:{" "}
                        <span className="font-medium text-base">
                            {weatherData &&
                                formatUnixTimestamp(
                                    weatherData.sys.sunrise,
                                    weatherData.timezone
                                )}
                        </span>
                    </p>
                    <p className="text-sm">
                        Sunset:{" "}
                        <span className="font-medium text-base">
                            {" "}
                            {weatherData &&
                                formatUnixTimestamp(
                                    weatherData.sys.sunset,
                                    weatherData.timezone
                                )}
                        </span>
                    </p>
                    <p className="text-sm">
                        Wind:{" "}
                        <span className="font-medium text-base">
                            {weatherData && weatherData.wind.speed}mph
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex justify-end gap-8">
                <button
                    onClick={() => {
                        navigate(`/edit/${location._id}`);
                    }}
                    className="h-8 w-16 rounded text-slate-100 bg-blue-600">
                    Edit
                </button>
                <button
                    onClick={() => {
                        deleteLocation();
                    }}
                    className="h-8 w-16 rounded text-slate-100 bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Diplay;
