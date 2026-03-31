import playStore from "../../assets/fi_16076057.png";
import appStore from "../../assets/Group.png";
import { Link } from "react-router";
import iphone from "../../assets/hero.png";
import ellipse1 from "../../assets/Ellipse 24.png";
import ellipse2 from "../../assets/Ellipse 25.png";
import ellipse3 from "../../assets/Ellipse 26.png";
import ellipse4 from "../../assets/Ellipse 27.png";
import ellipse5 from "../../assets/Ellipse 28.png";
import ellipse6 from "../../assets/Ellipse 29.png";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-7xl flex justify-center items-center flex-col leading-18.75 font-bold">
        <p>We Build</p>
        <p className="text-center">
          <span className="px-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
            Productive
          </span>{" "}
          Apps
        </p>
      </div>
      <p className="text-[#627382] text-base mt-5 max-w-200 text-center mb-10 px-3">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      {/* small icons */}
      <div className="mb-10">
        <Link
          to="https://play.google.com/store/games?hl=en"
          className="btn border-[#D2D2D2] py-6 px-5 transition ease-in-out hover:opacity-90 hover:scale-97"
        >
          <img src={playStore} alt="play_store" />
          Google Play
        </Link>
        <Link
          to="https://www.apple.com/app-store/"
          className="btn border-[#D2D2D2] font-semibold px-5 py-6 ml-4 transition ease-in-out hover:opacity-90 hover:scale-97"
        >
          <img src={appStore} alt="app_store" />
          App Store
        </Link>
      </div>
      <div className="flex justify-center items-center gap-9">
        <div>
          <img src={iphone} alt="" />
        </div>
      </div>
      {/* text content */}
      <div className="bg-gradient-to-r from-[#47229e] to-[#9F62F2] text-white w-full text-center py-14 mb-20">
        <div className="">
          <h1 className="text-5xl font-semibold">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex justify-center gap-7 md:gap-33 flex-col md:flex-row mt-6">
            <div>
              <p>Total Downloads</p>
              <h2 className="font-black text-[62px]">29.6M</h2>
              <p>28% more than last month</p>
            </div>
            <div>
              <p>Total Reviews</p>
              <h2 className="font-black text-[62px]">906K</h2>
              <p>32% more than last month</p>
            </div>
            <div>
              <p>Active Apps</p>
              <h2 className="font-black text-[62px]">132+</h2>
              <p>45 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
