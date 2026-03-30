import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className='bg-base-100 border-b-2 border-b-gray-200'>
            <div className="my-1 navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
                            <NavLink to='/'>Home </NavLink>
                            <NavLink to='/all-apps'>Apps </NavLink>
                            <NavLink to='/installation'>Installation </NavLink>

                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="font-bold text-xl bg-linear-135 from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent flex justify-center items-center gap-2"
                    >
                        <img src={logo} alt="logo" className="h-8 w-8" />
                        HERO.IO
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold gap-5">
                        <NavLink to='/'>Home </NavLink>
                        <NavLink to='/all-apps'>Apps </NavLink>
                        <NavLink to='/installation'>Installation </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link target='_blank' to='https://github.com/mohaiminul375' className='btn bg-linear-135 from-[#632EE3] to-[#9F62F2] text-white px-7 flex justify-center items-center transition ease-in-out hover:opacity-70 hover:scale-97'><FaGithub></FaGithub> Contribute</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;