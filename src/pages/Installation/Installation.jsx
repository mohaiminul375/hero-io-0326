import { useLoaderData } from "react-router";
import InstallationCard from "./InstallationCard";
import Loader from "../../components/Shared/Loader";
import { useState } from "react";

const Installation = () => {
  const { installedAppData: apps, status } = useLoaderData();
  // set initial value to state
  const [installedAppsList, setInstalledAppsList] = useState(apps || []);
  const [sortApps, setSortApps] = useState("none");
  // sort functionality and will be map it
  const sortedItem = () => {
    if (sortApps === "size-asc") {
      return [...installedAppsList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortApps === "size-desc") {
      return [...installedAppsList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installedAppsList;
    }
  };
  if (status !== 200) {
    return <Loader />;
  }
  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
        {/* sorting dropdown */}
        <div className="flex justify-center w-full px-3 flex-col md:flex-row items-center md:justify-between gap-3 my-6">
          <p className="font-bold text-xl">({apps?.length}) Apps Found</p>
          <select
            value={sortApps}
            onChange={(e) => setSortApps(e.target.value)}
            className="select"
          >
            <option disabled={true} value="none">
              Sort by Download
            </option>
            <option value="size-asc">Low-High</option>
            <option value="size-desc">High-Low</option>
          </select>
        </div>
      </div>
      {/* app card map sortItem() */}
      <div className="mt-10">
        {apps?.length !== 0 ? (
          sortedItem()?.map((app) => (
            <InstallationCard
              setInstalledAppsList={setInstalledAppsList}
              key={app.id}
              app={app}
            />
          ))
        ) : (
          <p className="text-3xl font-bold text-center mt-5 text-gray-500">
            No Apps Installed
          </p>
        )}
      </div>
    </section>
  );
};

export default Installation;
