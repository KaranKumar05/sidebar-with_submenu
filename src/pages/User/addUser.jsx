import React from "react";
import { useNavigate } from "react-router-dom";

import { IoArrowBackCircleSharp } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";

import "./user.css";

function AddUser() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/user/user");
  };

  return (
    <div className="addUserContainer">
      <div className="flex flex-col gap-2 pb-3">
        <h1 className="sectionHeading border-b border-gray-300 border-solid border-1 text-gray-500 font-light">
          Add User
        </h1>
        <div className="flex gap-2">
          <button
            className="btn flex items-center gap-2"
            onClick={handleBackClick}
          >
            <IoArrowBackCircleSharp /> Back
          </button>
          <button className="btn flex items-center gap-2">
            <FaRegSave /> Save
          </button>
        </div>
      </div>
      <div className="flex flex-col border-t border-gray-300 border-solid border-1 gap-4 pt-4">
        <div className="addUserInputContainer flex gap-4">
          <span className="flex flex-col w-full">
            <label htmlFor="id" className="text-sm text-gray-500">ID :</label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="number" id="id"
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="name" className=" text-sm text-gray-500">Name :</label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="text" id="name"
            />
          </span>
        </div>
        <div className="addUserInputContainer flex gap-4">
          <span className="flex flex-col w-full">
            <label htmlFor="email" className=" text-sm text-gray-500">Email :</label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="email" id="email"
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="password" className=" text-sm text-gray-500">Password :</label>
            <input
              className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"
              type="password" id="password"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
