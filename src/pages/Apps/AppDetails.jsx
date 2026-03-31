import { useState } from "react";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import like from "../../assets/icon-review.png";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useLoaderData } from "react-router";
import { addToLs, isInstalledApp } from "../../hook/LocalStorage";
import Loader from "../../components/Shared/Loader";

const AppDetails = () => {
  const { appData, status } = useLoaderData();
  const {
    id,
    title,
    image,
    companyName,
    reviews,
    ratings,
    downloads,
    ratingAvg,
    size,
    description,
  } = appData;
  const [installed, setInstalled] = useState(isInstalledApp(id));
  // console.log(isInstall);
  const handleInstall = (id) => {
    addToLs(id);
    setInstalled(true);
  };
  if (status !== 200) {
    return <Loader />;
  }
  return (
    <div>
      <div className="flex w-10/12 justify-center md:items-center flex-col md:flex-row md:gap-12 mx-auto border-b-2 py-7 border-gray-300">
        <div className="md:w-1/4 w-full md:bg-white p-6 rounded-lg">
          <img className="md:w-50 w-fit" src={image} alt="" />
        </div>

        <div className="md:w-4/5">
          <div className="mb-4 border-b border-gray-300 pb-4">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="flex gap-2">
              Developed by{" "}
              <span className="text-blue-700 font-semibold">{companyName}</span>
            </p>
          </div>

          <div className="flex md:justify-between lg:justify-start gap-10 md:gap-20 ">
            <div>
              <img src={download} alt="" />
              <p className="text-gray-500 mt-1">Downloads</p>
              <p className="font-black text-3xl mt-1">{downloads}M </p>
            </div>
            <div>
              <img src={star} alt="" />
              <p className="text-gray-500 mt-1">Average Ratings</p>
              <p className="font-black text-3xl mt-1">{ratingAvg} </p>
            </div>
            <div>
              <img src={like} alt="" />
              <p className="text-gray-500 mt-1">Total Reviews</p>
              <p className="font-black text-3xl mt-1">{reviews} </p>
            </div>
          </div>
          <button
            onClick={() => handleInstall(id)}
            disabled={installed}
            className="btn px-7 py-6 mt-6 text-white 
               bg-green-600 hover:transition ease-in-out hover:bg-green-700 hover:scale-97 
               disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-gray-700"
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      {/* chart */}
      <div className="my-15 container mx-auto px-3 h-100">
        <h1 className="text-2xl font-bold mb-5">Ratings</h1>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            data={ratings}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" reversed />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" barSize={20} fill="#11AF44" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      {/* description */}
      <div className="my-10 container mx-auto px-3">
        <h1 className="text-2xl font-bold mb-3">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
