import React from "react";

function Hero2() {
  return (
    <main className="bg-teal-900">
      <section className="text-gray-600 body-font w-9/12 mx-auto">
        <div className="container px-5 py-20 mx-auto flex flex-wrap justify-between">
          <div className="md:w-2/5 flex">
            <p
              className="text-slate-300 font-bold inline text-5xl"
              style={{ fontSize: "15rem", lineHeight: "10rem" }}
            >
              2
            </p>
            <h4 className="text-white font-bold inline text-5xl">
              Generate more <span className="text-[#F0A818]">leads</span>
            </h4>
          </div>
          <div className="md:w-1/2 text-white md:pl-6">
            <h4 className="font-bold text-4xl mb-5">AI Sales Training</h4>
            <p className="font-medium text-xl w-9/12">
              Scale your Outreach & Engage more prospects. Superreach automates
              your outreach efforts.
            </p>
            <div className="flex md:mt-8 mt-12">
              <button className="inline-flex border-2 text-[#F0A818] border-[#F0A818] py-1 px-4 focus:outline-none rounded">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero2;
