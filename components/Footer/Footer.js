import PropTypes from "prop-types";
import { useState } from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Buttons";

function Footer({ getStart }) {
  return (
    <footer class="footer border-t border-gray-200 bg-background shadow-md shadow-slate-900">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="md:flex md:items-center md:justify-between">
          <Link href="/" className="flex items-center max-w-56 mb-6 md:mb-0 mx-auto md:m-0 space-x-2 rtl:space-x-reverse">
            <Image src={logo} alt="HealMe Logo" width={200} height={200} />
          </Link>
          <ul class="flex flex-wrap flex-col md:flex-row items-center mb-6 text-md font-medium text-secondaryLight md:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="lg:mt-0 mr-6 relative">
                Home
              </Link>
            </li>
            <li>
              <Link href="/diagnostic" className="lg:mt-0 mr-6 relative">
                Diagnostic
              </Link>
            </li>
            <li>
              <Link href="/docs" className="lg:mt-0 mr-6 relative">
                Documentations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="lg:mt-0 mr-6 relative">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 md:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-md text-gray-500 text-center dark:text-gray-400">© 2023  <span></span>
        <Link href="/" className="text-secondaryLight hover:text-secondary">
          Healme
        </Link>. All Rights Reserved.</span>
      </div>
    </footer>


  );
}

Footer.propTypes = {
  getStart: PropTypes.bool,
};

export default Footer;
