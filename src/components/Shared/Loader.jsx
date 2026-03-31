import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  
  return (
    <section className="flex justify-center items-center min-h-full">
      <CirclesWithBar
        height="100"
        width="100"
        color="#9F62F2"
        outerCircleColor="#9F62F2"
        innerCircleColor="#632EE3"
        barColor="#632EE3"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </section>
  );
};

export default Loader;
