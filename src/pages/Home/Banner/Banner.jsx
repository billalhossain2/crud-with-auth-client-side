import React from "react";

const Banner = () => {
  return (
    <div className="mt-16 border-b-2 border-solid border-gray-300 shadow-sm pb-10 mb-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/hcG4dGS/job-search.png"
          className="w-1/2"
        />
        <div className="">
          <h1 className="md:text-4xl text-2xl font-bold">Millions of Jobs <br /> are waiting for you!</h1>
          <p className="py-6">
          "Explore a world of opportunities on our online job marketplace. With 'Millions of Jobs are waiting for you!' as our promise, we connect job seekers with countless possibilities. Your dream job might be just a click away, so get started today and take the first step toward a brighter future."
          </p>
          <form className="flex md:flex-row flex-col md:justify-between mb-5 border-solid border-[1px] border-[#2a40e877] p-5 rounded-lg" action="#">
             <div>
              <p className="text-[#2A41E8] font-bold">Where?</p>
             <input className="outline-none" type="text" placeholder="Online Job"/>
             </div>
             <div>
              <p className="text-[#2A41E8] font-bold">What do you want?</p>
             <input className="outline-none" type="text" placeholder="Job Title"/>
             </div>
             <button className="bg-[#2A41E8] text-white font-bold px-5 py-2">Search</button>
          </form>
          <div className="flex md:flex-row flex-col md:justify-between md:text-center gap-5 mb-5">
             <div>
                <h3 className="text-2xl font-bold text-gray-700">1650</h3>
                <p className="font-semibold text-gray-500">Jobs Posted</p>
             </div>
             <div>
                <h3 className="text-2xl font-bold text-gray-700">3575</h3>
                <p className="font-semibold text-gray-500">Tasks Posted</p>
             </div>
             <div>
                <h3 className="text-2xl font-bold text-gray-700">1326</h3>
                <p className="font-semibold text-gray-500">Freelancers</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
