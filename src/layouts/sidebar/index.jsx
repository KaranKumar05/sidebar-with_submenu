import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

import "./sidebar.css";

// * React icons
import { GoProject } from "react-icons/go";
import { MdAccountBalance, MdOutlineAccountCircle } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";

// Submenu Icons
import { IoMdPersonAdd } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { MdAccountTree } from "react-icons/md";
import { MdOutlineAccountTree } from "react-icons/md";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "13rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "13rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusLists = [
    {
      to: "/user",
      name: "user",
      icon: MdOutlineAccountCircle,
      menus: [
        {
          name: "add user",
          icon: <IoMdPersonAdd />,
          to: "user",
        },
      ],
    },
    {
      to: "/projectcosting",
      name: "projectCosting",
      icon: GoProject,
      menus: [
        {
          name: "project file",
          icon: <GoProject />,
          to: "projectfile",
        },
        {
          name: "group file",
          icon: <MdGroups />,
          to: "groupfile",
        },
      ],
    },
    {
      to: "account",
      name: "account",
      icon: MdAccountBalance,
      menus: [
        {
          name: "chart of account",
          icon: <FaRegChartBar />,
          to: "chartofaccount",
        },
        {
          name: "group head",
          icon: <MdAccountTree />,
          to: "grouphead",
        },
        {
          name: "sub head",
          icon: <MdOutlineAccountTree />,
          to: "subhead",
        },
      ],
    },
    {
      name: "report",
      icon: TbReportAnalytics,
      menus: [],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[13rem]  w-[13rem] 
            overflow-hidden md:relative fixed
          h-screen"
      >
        <div className="usernameContainer bg-primary flex items-center justify-center gap-2.5 font-medium border-b py-3 border-slate-300">
          <span className=" text-base whitespace-pre">Username</span>
        </div>

        <div className="flex flex-col  h-full sidebarLinks">
          <ul className="whitespace-pre px-2 text-[0.8rem] py-1 flex flex-col gap-0  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent   md:h-[80%] h-[70%]">
            {(open || isTabletMid) && (
              <div>
                {subMenusLists?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-2">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
          </ul>
        </div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
