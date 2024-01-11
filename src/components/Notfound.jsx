import React from "react";
import { Link } from "react-router-dom";
import Nodata from "../assets/R.png"
const NoDataFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={Nodata} alt="" />
            <h1 className="text-4xl font-bold mb-4">Oops!</h1>
            <p className="text-lg text-gray-600 mb-8">
                It seems like there's no data found.
            </p>
            <Link
                to="/"
                className="text-blue-500 hover:underline transition duration-300"
            >
                Go back to home
            </Link>
        </div>
    );
};

export default NoDataFoundPage;
