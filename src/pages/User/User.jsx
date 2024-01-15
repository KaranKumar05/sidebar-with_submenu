import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddUser from "./addUser";
import { IoIosAddCircle } from "react-icons/io";

import './user.css'

function User() {
  return (
    <div className="userContainer w-full">
      <div className="flex flex-col gap-2">
        <h1 className="sectionHeading border-b border-gray-300 border-solid border-1 text-gray-500 font-light">User</h1>
        <Link to="adduser" className="flex items-center gap-2 btn"><IoIosAddCircle /> Add User</Link>
        <div className="flex flex-col text-gray-500">
          <label htmlFor="searchUser" className=" text-sm">Search User</label>
          <input type="text" id="searchUser" className="border border-gray-500 border-solid border-1 p-2 rounded font-semibold text-black"/>
        </div>
        <div className="h-11"></div>

        <Routes>
          <Route path="adduser" element={<AddUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default User;
