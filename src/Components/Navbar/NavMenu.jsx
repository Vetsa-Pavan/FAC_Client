"use client";
import React, { useState } from "react";
import { lists } from "./NavList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faEnvelope,
  faPhone,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const NavMenu = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {lists.map((list) => (
        <div>
          <div>
            <h1 className=" py-3 font-bold text-xs text-[#2e2828] flex justify-between items-center md:pr-0  group">
              {list.name}{" "}
              <span className=" text-sm pb-2 md:mt-1 md:ml-2  md:block  group-hover:rotate-180 group-hover:-mt-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavMenu;
