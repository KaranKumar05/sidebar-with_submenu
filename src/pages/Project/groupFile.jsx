import React from 'react'
import './project.css'

import { IoArrowBackCircleSharp } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";

function GroupFile() {
  return (
    <div className="projectGroupFileContainer">
    <div className="flex flex-col gap-2 pb-3">
      <h1 className="sectionHeading border-b border-gray-300 border-solid border-1 text-gray-500 font-light">
        Create - Project Group File (NEW)
      </h1>
      <div className="flex gap-2">
        <button className="btn flex items-center gap-2">
          <IoArrowBackCircleSharp /> Back
        </button>
        <button className="btn flex items-center gap-2">
          <FaRegSave /> Save
        </button>
      </div>
    </div>
    <div className="flex flex-col border-t border-gray-300 border-solid border-1 gap-4 pt-4">
      <div className="projectFileInputContainer flex gap-4">
        <span className="flex flex-col w-full">
          <label htmlFor="projectGroup" className=" text-sm text-gray-500">Project Group :</label>
          <input
            className="border border-gray-500 border-solid border-1 p-2 rounded text-gray-500"
            type="text" id="projectGroup"
          />
        </span>
      </div>
    </div>
  </div>
  )
}

export default GroupFile
