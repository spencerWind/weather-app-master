import { useState, useEffect } from "react";
import React from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditLocationForm = () => {
    const [title, setTitle] = useState("");
    const [Location, setLocation] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        await axios
            .get(`http://localhost:8000/api/weather/${id}`)
            .then((res) => {
                console.log(res);
                setTitle(res.data.title)
                setLocation(res.data.Location)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .patch(`http://localhost:8000/api/weather/${id}`, {
                title,
                Location,
            })
            .then((res) => {
                console.log("success", res.data);
                navigate("/");
                setTitle("");
                setLocation("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className=" text-slate-100 max-w-[1280px] m-auto px-4">
            <Navigation />
            <div className="my-16 flex flex-col items-center">
                <h1 className="text-primary font-bold text-3xl mb-8">
                    Edit Location
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="p-4 text-slate-900 w-full max-w-[512px] bg-display">
                    <div className="flex flex-col gap-2 mb-8">
                        <label
                            htmlFor="title"
                            className="text-xl">
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            id="title"
                            className="h-8 rounded bg-slate-200 pl-2"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-8">
                        <label
                            htmlFor="title"
                            className="text-xl">
                            Location (City)
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="h-8 rounded bg-slate-200 pl-2"
                            value={Location}
                            onChange={(e) => {
                                setLocation(e.target.value);
                            }}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Update City"
                        className="h-8 w-full bg-primary rounded font-bold"
                    />
                </form>
            </div>
        </div>
    );
};

export default EditLocationForm;
