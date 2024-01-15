import React from "react";

import './account.css'

import { IoArrowBackCircleSharp } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";

function GroupHead() {
  return (
    <div className="groupHeadContainer">
      <div className="flex flex-col gap-2 pb-3">
        <h1 className="sectionHeading border-b border-gray-300 border-solid border-1 text-gray-500 font-light">
          Create - Group Head Account (NEW)
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
        <div className="groupHeadInputContainer flex gap-4">
          <span className="flex flex-col w-full">
            <label htmlFor="headAccount" className=" text-sm text-gray-500">
             Group Head Account :
            </label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="text"
              id="headAccount"
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="nature" className=" text-sm text-gray-500">
              Nature :
            </label>
            <select
              id="nature"
              className="border border-gray-500 border-solid border-1 p-[0.6rem] rounded text-black"
            >
              <option className="bg-blue-900 text-white" value="" disabled>
                Select
              </option>
              <option className="bg-blue-900 text-white" value="">
                Option-2
              </option>
              <option className="bg-blue-900 text-white" value="">
                Option-3
              </option>
              <option className="bg-blue-900 text-white" value="">
                Option-4
              </option>
            </select>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GroupHead;
