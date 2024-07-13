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
          <div className="md:cursor-pointer group">
            <h1 className=" py-3 font-bold text-xs text-[#2e2828] flex justify-between items-center md:pr-0  group">
              {list.name}{" "}
              <span className=" text-sm pb-2 md:mt-1 md:ml-2  md:block  group-hover:rotate-180 group-hover:-mt-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </h1>
            {list.submenu && (
              <div>
                {/* contains 2 divs arrow div and list div */}
                <div className=" absolute top-28 hidden group-hover:block hover:block">
                  {/* arrow div - has 2 divs 1st div takes properties of above div and 2nd div is absolute to 1st div to avoid issue */}
                  <div>
                    <div
                      className="w-4 h-4 left-3 absolute 
                     -mt-2 bg-[#40739e] rotate-45"
                    ></div>
                  </div>
                  {/* list div */}
                  <div className="bg-[#40739e] p-3">
                    <div className=" flex flex-col gap-2">
                      {list.sublist.map((mySublist) => (
                        <div className=" text-nowrap">
                          <li>
                            <a
                              href={mySublist.link}
                              className=" hover: text-white"
                            >
                              {mySublist.name}
                            </a>
                          </li>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavMenu;
