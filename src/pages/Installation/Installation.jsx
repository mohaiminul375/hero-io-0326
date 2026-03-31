import { useLoaderData } from "react-router";
import InstallationCard from "./InstallationCard";

const Installation = () => {
  const apps = useLoaderData();
  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-center w-full px-3 flex-col md:flex-row items-center md:justify-between gap-3 my-6">
          <p className="font-bold text-xl">({apps?.length}) Apps Found</p>
          <select
            // value={sortApps}
            // onChange={(e) => setSortApps(e.target.value)}
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
      {/* app card */}
      <div className="mt-10">
        {apps.length !== 0 ? (
          apps.map((app) => <InstallationCard key={app.id} app={app} />)
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
