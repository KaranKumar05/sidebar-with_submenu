// SubMenu.js

import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubMenuClick = () => {
    if (data.menus?.length > 0) {
      // If there are submenu items, toggle the submenu visibility
      setSubMenuOpen(!subMenuOpen);
    } else {
      // If no submenu, navigate to the main menu route
      navigate(`/${data.name}`);
    }
  };

  const handleSubMenuItemClick = (to) => {
    // When a submenu item is clicked, navigate to its route
    navigate(`/${data.name}/${to}`);
  };

  // Check if the current location matches the main menu item's route
  const isActive = location.pathname.includes(`/${data.name}`);

  return (
    <>
      <li
        className={`link ${subMenuOpen && ""} ${isActive && "active"}`}
        onClick={handleSubMenuClick}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-6 text-[0.75rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu) => (
          <li key={menu.name}>
            <span
              className={`link !bg-transparent capitalize ${
                location.pathname.includes(`/${data.name}/${menu.to}`) &&
                "active"
              }`}
              onClick={() => handleSubMenuItemClick(menu.to)}
            >
              {menu.icon && <span className="">{menu.icon}</span>}
              {menu.name}
            </span>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
