import { map } from "lodash";
import React, { Children } from "react";

function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="/"
        >
          <img src="/logo.svg" alt="superreach" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-5">
          {Children.toArray(
            map(
              [
                "Why SuperReach",
                "Features",
                "Use Cases",
                "About",
                "Pricing",
                "Blog",
              ],
              (item) => {
                return (
                  <a className="mr-5 text-white font-bold text-lg" href="/">
                    {item}
                  </a>
                );
              }
            )
          )}
        </nav>

        <div className="flex flex-row gap-5">
          <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded-full text-white font-bold mt-4 md:mt-0">
            Login
          </button>
          <button className="inline-flex items-center bg-orange-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded-full text-black font-bold mt-4 md:mt-0">
            Start
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
