import React from "react";
import { Link } from 'react-router-dom';
import { VscSettings } from "react-icons/vsc";


const Properties = () => {
  return (
    <section className="max-padd-container">
      <div className="max-padd-container bg-primary py-16 xl:py-28 rounded-3xl">
        <span className="medium-18">Your Future Awaits!</span>
        <h2 className="h2">Find Your Dream Here</h2>
        <div className="flexBetWeen mt-8 mb-6">
          <h5><span className="font-bold">Showing 1-9</span> out of 3k properties</h5>
          <Link to={"/"} className="bg-white text-3xl rounded-md h-10 w-10 border">
            <VscSettings />
          </Link>
        </div>
        {/* container */}
        
      </div>
    </section>
  )
}

export default Properties