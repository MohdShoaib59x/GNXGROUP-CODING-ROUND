import React from "react";

function Hero1() {
  return (
    <section className="text-gray-600 body-font w-9/12 mx-auto">
      <div className="container px-5 py-20 mx-auto flex flex-wrap justify-between">
        <div className="md:w-2/5 flex">
          <p
            className="text-slate-300 font-bold inline text-5xl"
            style={{ fontSize: "15rem", lineHeight: "10rem" }}
          >
            1
          </p>
          <h4 className="text-black font-bold inline text-5xl">
            Generate more <span className="text-[#F0A818]">leads</span>
          </h4>
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h4 className="text-black font-bold text-4xl mb-5">
            Outreach & Data
          </h4>
          <p className="text-black font-medium text-xl w-9/12">
            Scale your Outreach & Engage more prospects. Superreach automates
            your outreach efforts.
          </p>
          <div className="flex md:mt-8 mt-12">
            <button className="inline-flex text-black border-2 border-black py-1 px-4 focus:outline-none rounded">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero1;
