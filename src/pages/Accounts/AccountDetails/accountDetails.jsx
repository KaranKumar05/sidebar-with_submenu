import React from "react";
import '../account.css'

function AccountDetails() {
  return (
    <div className="flex flex-col gap-4 pt-4 accountDetailsContainer">
      <h1 className="sectionHeading border-b border-gray-300 border-solid border-1 text-gray-500 font-light">
        Account Details
      </h1>
      <div className="accountDetailsInputContainer flex gap-4">
        <span className="flex flex-col w-full">
          <label htmlFor="address" className="text-sm text-gray-500">
            Address
          </label>
          <input
            className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
            type="text"
            id="address"
          />
        </span>
        <span className="flex flex-col w-full">
          <label htmlFor="phone" className=" text-sm text-gray-500">
            Phone
          </label>
          <input
            className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
            type="number"
            id="phone"
          />
        </span>
      </div>
      <div className="accountDetailsInputContainer flex gap-4">
        <span className="flex flex-col w-full">
          <label htmlFor="cell" className=" text-sm text-gray-500">
            Cell
          </label>
          <input
            className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
            type="number"
            id="cell"
          />
        </span>
        <span className="flex flex-col w-full">
          <label htmlFor="secCell" className=" text-sm text-gray-500">
            2nd Cell
          </label>
          <input
            className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
            type="number"
            id="secCell"
          />
        </span>
      </div>
      <div className="accountDetailsInputContainer flex gap-4">
        <span className="flex flex-col w-full">
          <label htmlFor="email" className=" text-sm text-gray-500">
            Email
          </label>
          <input
            className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
            type="email"
            id="email"
          />
        </span>
        <span className="flex flex-col w-full">
          <label htmlFor="website" className=" text-sm text-gray-500">
            Website
          </label>
          <input
            className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
            type="text"
            id="website"
          />
        </span>
      </div>
      <div className="accountDetailsInputContainer flex gap-4">
        <span className="flex flex-col w-full">
          <label htmlFor="gst" className=" text-sm text-gray-500">
            Gst
          </label>
          <input
            className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
            type="text"
            id="gst"
          />
        </span>
        <span className="flex flex-col w-full">
          <label htmlFor="ntn" className=" text-sm text-gray-500">
            NTN
          </label>
          <input
            className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
            type="text"
            id="ntn"
          />
        </span>
      </div>
      <div className="accountDetailsInputContainer flex gap-4">
        <span className="flex flex-col w-full">
          <label htmlFor="concernPerson" className=" text-sm text-gray-500">
            Concern Person
          </label>
          <input
            className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
            type="text"
            id="concernPerson"
          />
        </span>
      </div>
    </div>
  );
}

export default AccountDetails;
