import React from "react";

function Poplar() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container py-0 mx-auto">
          <div className="lg:w-9/12 mx-auto flex flex-wrap bg-gray-200">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded aspect-[9/10]"
              src="/assets/asset3.png"
            />
            <div className="lg:w-1/2 w-full lg:px-20 lg:py-20 mt-6 lg:mt-0">
              <h4 className="text-xl font-bold underline decoration-4 decoration-orange-400 underline-offset-8 mb-10">
                Find. Engage. Automate
              </h4>

              <h1 className="font-bold text-gray-900 text-3xl title-font mb-1">
                Outreach
              </h1>

              <p className="text-xl font-normal text-black">
                Hyper-personalised outreach platform to warm up prospects. All
                synced with your CRM.
                <ul className="list-disc list-inside mt-5">
                  <li>Role-play with 100's of Customer Avatars</li>
                  <li>Automated Coaching</li>
                  <li>Find out who can sell within a week. (fail fast)</li>
                </ul>
              </p>
              <button className="mt-20 inline-flex text-black border-2 border-black py-1 px-4 focus:outline-none rounded">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font overflow-hidden mt-20">
        <div className="container py-0 mx-auto">
          <div className="lg:w-9/12 mx-auto flex flex-wrap bg-gray-200 flex-row-reverse	">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded aspect-[9/10]"
              src="/assets/asset4.png"
            />
            <div className="lg:w-1/2 w-full lg:px-20 lg:py-20 mt-6 lg:mt-0">
              <h4 className="text-xl font-bold underline decoration-4 decoration-orange-400 underline-offset-8 mb-10">
                Find. Engage. Automate
              </h4>

              <h1 className="font-bold text-gray-900 text-3xl title-font mb-1">
                Outreach
              </h1>

              <p className="text-xl font-normal text-black">
                Hyper-personalised outreach platform to warm up prospects. All
                synced with your CRM.
                <ul className="list-disc list-inside mt-5">
                  <li>Role-play with 100’s of Customer Avatars</li>
                  <li>Automated Coaching</li>
                  <li>Find out who can sell within a week. (fail fast)</li>
                </ul>
              </p>
              <button className="mt-20 inline-flex text-black border-2 border-black py-1 px-4 focus:outline-none rounded">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Poplar;
