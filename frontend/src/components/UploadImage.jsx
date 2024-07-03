import React, { useState } from 'react'
import { MdOutlineCloudUpload } from 'react-icons/md'

const UploadImage = ({ nextStep, prevStep, propertyDetails, setPropertyDetails }) => {
  
  const[imageURL, setImageURL] = useState(propertyDetails.image)

  return (
    <div>
      {
        !imageURL ? (
          <div className="flexCenter flex-col w-3/4 h-[21rem] border-dashed border-2 cursor-pointer">
            <MdOutlineCloudUpload 
              size={44}
              color="grey"
            />
            <span>Upload Image</span>
          </div>
        ) : (
          <div>
            
          </div>
        )
      }
    </div>
  )
}

export default UploadImage