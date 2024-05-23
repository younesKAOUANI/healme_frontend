import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.png';

function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleMobileMenu = () => {
    setActiveMobileMenu(!activeMobileMenu);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setLoggedIn(true);
    }
  }, []); // Added empty dependency array to run only once

  return (
    <nav className="header shadow-lg bg-white dark:background fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <Image src={logo} alt="HealMe Logo" width={200} height={200} />
        </Link>
        <div className="flex gap-4 lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">

          <button type="button" onClick={toggleMobileMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={activeMobileMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${activeMobileMenu ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="nav flex flex-col items-center p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white text-secondaryLight dark:border-gray-700">
            <li>
              <Link href="/" className="nav-items lg:mt-0 relative">
                Home
              </Link>
            </li>
            <li>
              <Link href="/diagnostic" className="nav-items lg:mt-0 relative">
                Diagnostic
              </Link>
            </li>
            <li>
              <Link href="/docs" className="nav-items lg:mt-0 relative">
                Documentations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-items lg:mt-0  relative lg:mr-24">
                Contact us
              </Link>
            </li>
            {loggedIn ? (
              <li>
                  <Link href="/profile" passHref className="text-white  bg-secondaryLight hover:bg-secondary hover:scale-95 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                      Profile
                  </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/login" passHref className="text-white bg-secondaryLight hover:bg-secondary hover:scale-95 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                      Login

                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-white bg-secondaryLight hover:bg-secondary hover:scale-95 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" passHref>
                      Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Header;
