import { Link } from "react-router-dom";

import './Header.css'
const Header = () => {
    return (

        <header className="flex flex-wrap sm:justify-end sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
            <nav className="justify-end mr-5" aria-label="Global">

                <div className="flex flex-row items-center  gap-5 mt-5  sm:mt-0 sm:ps-5">
                    <Link className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/" aria-current="page">Home</Link>
                    <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/review">Review</Link>
                    <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/about">About</Link>
                    <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/">Blog</Link>
                </div>
            </nav>
        </header>



    );
};

export default Header;