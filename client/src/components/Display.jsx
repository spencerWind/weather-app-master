import React, { useState } from "react";
import clearSky from "../assets/clearSky.png"

const Diplay = ({weather}) => {

    return (
        <div className="w-96 rounded-lg p-4 bg-display text-slate-900">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-3xl">Home</h1>
                    <h2 className="font-light">Cincinnati</h2>
                </div>
                <span className="text-3xl font-black">75 deg</span>
            </div>
            <img
                src={clearSky}
                alt="Clear Sky"
                className="h-64 w-full mb-4"
            />
            <div className="flex justify-between mb-8 font-light">
                <div className="">
                    <p className="text-sm">
                        Feels like:{" "}
                        <span className="font-medium text-base">77 deg</span>
                    </p>
                    <p className="text-sm">
                        Humidity:{" "}
                        <span className="font-medium text-base">43%</span>
                    </p>
                    <p className="text-sm">
                        Pressure:{" "}
                        <span className="font-medium text-base">0.8am</span>
                    </p>
                </div>
                <div>
                    <p className="text-sm">
                        Sunrise:{" "}
                        <span className="font-medium text-base">6:11am</span>
                    </p>
                    <p className="text-sm">
                        Sunset:{" "}
                        <span className="font-medium text-base">8:52pm</span>
                    </p>
                    <p className="text-sm">
                        Wind:{" "}
                        <span className="font-medium text-base">9mph</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-end gap-8">
                <button className="h-8 w-16 rounded text-slate-100 bg-blue-600">
                    Edit
                </button>
                <button className="h-8 w-16 rounded text-slate-100 bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Diplay;
