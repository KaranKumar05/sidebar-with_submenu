import React from "react";

import './project.css'

import { IoArrowBackCircleSharp } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";

function ProjectFile() {
  return (
    <div className="projectFileContainer">
      <div className="flex flex-col gap-2 pb-3">
        <h1 className="sectionHeading border-b border-gray-300 border-solid border-1 text-gray-500 font-light">
          Create - Project File (NEW)
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
            <label htmlFor="job" className=" text-sm text-gray-500">jod #</label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="text" id="job"
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="desc" className=" text-sm text-gray-500">Desc :</label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="text" id="desc"
            />
          </span>
        </div>
        <div className="projectFileInputContainer flex gap-4">
          <span className="flex flex-col w-full">
            <label htmlFor="shortName" className=" text-sm text-gray-500">Short Name :</label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="email" id="shortName"
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="projectGroup" className=" text-sm text-gray-500">Project Group :</label>
            <select id="projectGroup" className="border border-gray-500 border-solid border-1 p-2 rounded text-black">
              <option className="bg-blue-900 text-white" value="" disabled>Select</option>
              <option className="bg-blue-900 text-white" value="">Option-2</option>
              <option className="bg-blue-900 text-white" value="">Option-3</option>
              <option className="bg-blue-900 text-white" value="">Option-4</option>
            </select>
          </span>
        </div>
        <div className="projectFileInputContainer flex gap-4">
          <span className="flex flex-col w-full">
            <label htmlFor="openingBalance" className="d text-sm text-gray-500">Opening Balance :</label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="text" id="openingBalance"
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="openingDate" className="text-sm text-gray-500">Opening Date :</label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded text-gray-500"
              type="date" id="openingDate"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectFile;
