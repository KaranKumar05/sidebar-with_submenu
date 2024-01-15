import React, { useState } from "react";

import { IoArrowBackCircleSharp } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";
import AccountDetails from "./AccountDetails/accountDetails";

function ChartOfAccount() {
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 pr-3 pl-2">
      <div className="chartAccountContainer">
        <div className="flex flex-col gap-2 pb-3">
          <h1 className="sectionHeading border-b border-gray-300 border-solid border-1 text-gray-500 font-light">
            Create - Chart of Account (NEW)
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
          <div className="chartAccountInputContainer flex gap-4">
            <span className="flex w-full justify-between items-center">
              <span className="flex flex-col w-[60%]">
                <label htmlFor="name" className=" text-sm text-gray-500">
                  Name :
                </label>
                <input
                  className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
                  type="text"
                  id="headAccount"
                />
              </span>
              <span className="flex flex-col w-[5rem]">
                <label htmlFor="inActive">In Active</label>
                <input type="checkbox" id="inActive" />
              </span>
            </span>
            <span className="flex flex-col w-full">
              <label
                htmlFor="subHeadAccount"
                className=" text-sm text-gray-500"
              >
                Sub Head Account :
              </label>
              <select
                id="subHeadAccount"
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
          <div className="chartAccountInputContainer flex gap-4">
            <span className="flex flex-col w-full">
              <label htmlFor="groupAccount" className=" text-sm text-gray-500">
                Group Account
              </label>
              <input
                className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
                type="text"
                id="groupAccount"
                disabled
              />
            </span>
            <span className="flex flex-col w-full">
              <label htmlFor="nature" className=" text-sm text-gray-500">
                Nature :
              </label>
              <input
                className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
                type="text"
                id="nature"
                disabled
              />
            </span>
          </div>
          <div className="chartAccountInputContainer flex gap-4">
            <span className="flex flex-col w-full">
              <label htmlFor="party" className=" text-sm text-gray-500">
                Party :
              </label>
              <select
                id="party"
                className="border border-gray-500 border-solid border-1 p-[0.6rem] rounded text-black"
                value={selectedOption}
                onChange={handleChange}
              >
                <option className="bg-blue-900 text-white" value="" disabled>
                  Select
                </option>
                <option className="bg-blue-900 text-white" value="option1">
                  Head
                </option>
                <option className="bg-blue-900 text-white" value="option2">
                  Sub Head
                </option>
                <option className="bg-blue-900 text-white" value="option3">
                  Other
                </option>
              </select>
            </span>
            <span className="flex flex-col w-full">
              <label htmlFor="acType" className=" text-sm text-gray-500">
                A/C Type :
              </label>
              <select
                id="acType"
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
      <div className="flex flex-col py-2 chartAccountContainer">
        <label htmlFor="comment" className=" text-sm text-gray-500">
          Comments
        </label>
        <input
          type="text"
          className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
          id="comment"
        />
      </div>

      <div className="flex flex-col gap-4 pt-4 chartAccountContainer">
        <h1 className="sectionHeading border-b border-gray-300 border-solid border-1 text-gray-500 font-light">
          Other Details
        </h1>
        <div className="chartAccountInputContainer flex gap-4">
          <span className="flex flex-col w-full">
            <label htmlFor="opening" className="text-sm text-gray-500">
              Opening
            </label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="number"
              id="opening"
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="commission" className=" text-sm text-gray-500">
              Commission %
            </label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="text"
              id="commission"
            />
          </span>
        </div>
        <div className="chartAccountInputContainer flex gap-4">
          <span className="flex flex-col w-full">
            <label htmlFor="creditDays" className=" text-sm text-gray-500">
              Credit Days
            </label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="email"
              id="creditDays"
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="creditAllowed" className=" text-sm text-gray-500">
              Credit Allowed
            </label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="password"
              id="creditAllowed"
            />
          </span>
        </div>
      </div>
      <div>
        {selectedOption === "option1" || selectedOption === "option2" ? (
          <AccountDetails />
        ) : null}
      </div>
    </div>
  );
}

export default ChartOfAccount;
