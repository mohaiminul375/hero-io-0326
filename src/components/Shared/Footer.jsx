import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer className=" bg-black md:p-10 p-4 mt-28">
        <div className="footer sm:footer-horizontal text-white p-0">
          <aside className="bg-linear-135 from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent gap-2">
            <img className="w-10" src={logo} alt="logo" />
            <h2 href="/" className="text-xl font-bold">
              Hero.Io
            </h2>
            <p className="text-[#A1A1AA] text-base">
              Top Rated Best app Library for <br /> Developers and programmer.
            </p>
          </aside>
          <nav className="xl:col-span-2">
            <h6 className="font-bold text-base text-white">Company</h6>
            <a className="link link-hover text-[#A1A1AA]">About Us</a>
            <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
            <a className="link link-hover text-[#A1A1AA]">Contact us</a>
          </nav>
          <nav className="">
            <h6 className="font-bold text-base text-white">Information</h6>
            <a className="link link-hover text-[#A1A1AA]">Privacy policy</a>
            <a className="link link-hover text-[#A1A1AA]">Terms & Condition</a>
            <a className="link link-hover text-[#A1A1AA]">Join Us</a>
          </nav>
          <nav className="">
            <h6 className="font-bold text-base text-white">Service</h6>
            <a className="link link-hover text-[#A1A1AA]">
              Products & Services
            </a>
            <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
            <a className="link link-hover text-[#A1A1AA]">Download Stories</a>
          </nav>
        </div>
        <hr className="my-5 text-2xl text-white" />
        <div className="text-center text-white">
          <p>© 2026 Hero.IO app,   All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
