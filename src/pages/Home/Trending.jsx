import { Link, useLoaderData } from "react-router";
import AppCard from "../../components/AppCard";
import Loader from "../../components/Shared/Loader";

const Trending = () => {
  const { data: apps, status } = useLoaderData();
  if (status !== 200) {
    return <Loader />;
  }
  return (
    <div>
      {/* Trending Apps  */}
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-semibold text-[48px]">Trending Apps</h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/* Home page apps 8 */}
        {apps.length !== 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {apps.slice(0, 8).map((app) => (
                <AppCard key={app.id} appData={app}></AppCard>
              ))}
            </div>
            <div className="text-center mt-15 mx-auto ">
              <Link
                to="/all-apps"
                className="py-2 mx-auto rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-7 transition ease-in-out hover:opacity-70 hover:scale-x-105 inline-block"
              >
                Show All
              </Link>
            </div>
          </>
        ) : (
          <p className="text-3xl font-bold text-center mt-5 text-gray-500">
            No Apps Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Trending;
