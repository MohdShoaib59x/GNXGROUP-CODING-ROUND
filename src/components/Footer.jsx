import { map } from "lodash";
import React, { Children } from "react";

function Footer() {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font pt-20">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center  w-9/12">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-white">
              Go further.
              <br className="hidden lg:inline-block" />
              Go faster.
            </h1>
            <p className="mb-8 leading-relaxed text-3xl text-white w-4/6">
              Unlocking recruiters and sales reps full potential
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-black font-medium bg-[#F0A818] border-0 py-2 px-6 focus:outline-none hover:bg-[#F0A818] rounded text-lg">
                Get Started
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="assets/asset6.png"
            />
          </div>
        </div>
      </section>

      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container w-9/12 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 mx-auto text-center md:text-left">
            <a
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            >
              <img src="/assets/asset5.png" alt="" />
            </a>
          </div>
          <div className="flex-grow flex flex-wrap text-left">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
                Explore
              </h2>
              <nav className="list-none mb-10">
                {Children.toArray(
                  map(
                    [
                      "Our story",
                      "Meet the team",
                      "Join the team",
                      "Refeeral program",
                    ],
                    (item) => {
                      return (
                        <li>
                          <a
                            href="/"
                            className="text-gray-400 hover:text-white"
                          >
                            {item}
                          </a>
                        </li>
                      );
                    }
                  )
                )}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
                 
              </h2>
              <nav className="list-none mb-10">
                {Children.toArray(
                  map(["Blogs", "Press", "Contact"], (item) => {
                    return (
                      <li>
                        <a href="/" className="text-gray-400 hover:text-white">
                          {item}
                        </a>
                      </li>
                    );
                  })
                )}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
                Features
              </h2>
              <nav className="list-none mb-10">
                {Children.toArray(
                  map(
                    [
                      "Outreach",
                      "Learning Platform",
                      "AI Role Play",
                      "Reporting & analytics",
                    ],
                    (item) => {
                      return (
                        <li>
                          <a
                            href="/"
                            className="text-gray-400 hover:text-white"
                          >
                            {item}
                          </a>
                        </li>
                      );
                    }
                  )
                )}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
                Resources
              </h2>
              <nav className="list-none mb-10">
                {Children.toArray(
                  map(["Help desk", "Faqs", "Videos/webinars"], (item) => {
                    return (
                      <li>
                        <a href="/" className="text-gray-400 hover:text-white">
                          {item}
                        </a>
                      </li>
                    );
                  })
                )}
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
