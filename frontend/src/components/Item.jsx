import React from 'react'
import HeartBtn from './HeartBtn'
import { MdOutlineBed, MdOutlineBathtub, MdOutlineGarage } from 'react-icons/md'
import { Link } from 'react-router-dom'


const Item = ({ property }) => {
  return (
    <div className="rounded-2xl p-5">
      <div>
        <img 
          src={property.image} 
          alt={property.title} 
          className="rounded-xl"
        />
        {/* like btn */}
        <div className="absolute top-4 right-6">
          <HeartBtn />
        </div>
      </div>
      <h5>{property.city}</h5>
      <h4>{property.title}</h4>
      {/* info */}
      <div className="flex gap-x-2 py-2">
        <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
          <MdOutlineBed />{ property.facilities.bedrooms }
        </div>
        <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
          <MdOutlineBathtub />{property.facilities.bathrooms}
        </div>
        <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
          <MdOutlineGarage />{property.facilities.parkings}
        </div>
      </div>
      <p>
        {property.description}
      </p>
      <div className="flexBetween">
        <div>
          ${property.price}.00
        </div>
        <Link to={'/'}>
          <button className="btn-secondary rounded-xl !py-[7px] !px-5 shadow-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Item