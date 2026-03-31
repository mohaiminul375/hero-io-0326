import { useLoaderData } from "react-router";
import AppCard from "../../components/AppCard";

const AllApps = () => {
  const apps = useLoaderData();
  console.log(apps);
  return (
    <section className="container mx-auto">
      {/* heading */}
      <div className="flex justify-center items-center flex-col text-center mb-10">
        <h1 className="font-bold text-[43px]">Our All Applications</h1>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {/* search */}
      <div className="flex justify-center items-center gap-3 md:justify-between mb-5 flex-col md:flex-row">
        <p className="font-bold text-xl">({apps?.length || 0}) Apps Found</p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {apps?.map((app) => (
          <AppCard key={app.id} appData={app} />
        ))}
      </div>
    </section>
  );
};

export default AllApps;
