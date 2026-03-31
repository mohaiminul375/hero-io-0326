import { toast } from "react-toastify";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import { getInsApp } from "../../hook/LocalStorage";
import { useNavigate } from "react-router";

const InstallationCard = ({ app, setInstalledAppsList }) => {
  const navigate = useNavigate();
  // remove
  const handleRemove = (id) => {
    const getLsData = getInsApp("InstalledApps");
    const updatedList = getLsData.filter((app) => app !== id);
    localStorage.setItem("InstalledApps", JSON.stringify(updatedList));
    setInstalledAppsList(JSON.stringify(updatedList));
    toast.success("Delete Successfully");
    // reload
    navigate("/installation", { replace: false });
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center mx-3 rounded-lg mb-3 bg-white p-4 gap-3">
      <div className="flex gap-4">
        <div className="bg-gray-200 rounded-lg p-3 w-15">
          <img className="w-full" src={app.image} alt="" />
        </div>
        <div className="flex justify-center flex-col">
          <h3 className="font-semibold text-lg">{app.title}</h3>
          <div className="flex gap-5 mt-2 text-gray-400">
            <div className="flex gap-2 items-center">
              <img className="w-4.25" src={download} alt="" />
              <p>{app.downloads}M</p>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-4.25" src={star} alt="" />
              <p className="text-orange-600">{app.ratingAvg}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p>{app.size} MB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-none w-full md:w-auto">
        <button
          onClick={() => handleRemove(app.id)}
          className="btn bg-green-600 text-white transition ease-in-out hover:opacity-70 w-1/2 md:w-auto mx-auto"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallationCard;
