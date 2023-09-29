import React from "react";

function Hero() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <section className="w-9/12 mx-auto">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center justify-between ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white">
              Do you want to
              <br className="hidden lg:inline-block" />
              close more deals
            </h1>
            <p className="mb-8 text-white text-2xl w-9/12">
              Recruiters and Sales reps; hitting targets and closing deals can
              be stressful and hard work. Our Ai makes it easier.
            </p>
            <div className="relative">
              <img
                className="object-contain object-center rounded"
                alt="hero"
                src="/assets/asset8.png"
              />
              <img
                className="object-cover object-center rounded absolute start-14"
                alt="hero"
                src="/assets/asset7.png"
              />
            </div>
          </div>
          <div className="lg:w-4/12 lg:w-1/2 md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/assets/asset1.png"
            />
            <h4 className="text-white font-bold text-2xl mt-2">
              Want to Talk TO ME?
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
