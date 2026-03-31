import download from "../assets/icon-downloads.png";
import star from "../assets/icon-downloads.png";
import { Link } from "react-router";

const AppCard = ({ appData }) => {
  const { id, title, image, downloads, ratingAvg, companyName } = appData;

  return (
    <Link
      to={`/app/${id}`}
      className="bg-white shadow-xl rounded-lg p-4 hover:scale-102 transition ease-in-out hover:shadow-2xl"
    >
      <div className="bg-gray-200 p-5 rounded-lg mb-3">
        <img
          className="mx-auto p-4 w-42.5 h-42.5 rounded-full"
          src={image}
          alt=""
        />
      </div>
      <h1 className="mt-2 font-semibold">
        {title}: {companyName}
      </h1>
      <div className="flex justify-between items-center my-1">
        <p className="flex items-center justify-center gap-2 text-green-600">
          <img className="w-4" src={download} alt="" />
          {downloads}M
        </p>
        <p className="flex items-center justify-center gap-2 text-orange-700">
          <img className="w-4" src={star} alt="" />
          {ratingAvg}
        </p>
      </div>
    </Link>
  );
};

export default AppCard;
