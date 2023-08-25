import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Navigation from "../components/Navigation";
import Display from "../components/Display";
import axios from "axios";

const Main = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            await axios
                .get("http://localhost:8000/api/weather")
                .then((res) => {
                    console.log(res);
                    setLocations(res.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        fetchLocations()
    }, []);

    return (
        <div className=" text-slate-100 max-w-[1280px] m-auto px-4">
            <Navigation />
            <div className="my-16">
                <h3 className="mb-4 font-semibold text-primary">
                    My forecasts
                </h3>
                <div className="flex flex-row gap-8 flex-wrap">
                    {locations.map((location) => (
                        <Display key={location._id} location={location} locations={locations} setLocations={setLocations} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
