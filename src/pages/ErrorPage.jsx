import errorImg from '../assets/OBJECTS.png'
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center gap-2 py-10'>
                <img src={errorImg} alt="" />
                <h1 className='mt-4 font-bold text-4xl'>Oops, page not found!</h1>
                <p className='text-gray-600'>The page you are looking for is not available.
                </p>
                <Link to='/' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-7'>Go Back</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;