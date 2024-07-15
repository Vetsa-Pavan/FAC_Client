"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Images/navLogo.png";
import NavMenu from "./NavMenu";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import Socials from "../Socials";

const Nav = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <nav className=" absolute md:min-[990px]:fixed w-full pt-4 pb-1">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 flex md:min-[990px]:w-auto w-full justify-between">
          <div className="flex flex-col items-center">
            <a href="/">
              <Image src={Logo} className=" w-[6.5rem] h-12" />
            </a>
            <p className="font-bold text-xs text-[#535c68]">
              A Passion To Help
            </p>
            <p className="font-bold text-xs text-nowrap">
              Social Welfare Association
            </p>
          </div>
          <div
            className="text-3xl md:min-[990px]:hidden pt-4"
            onClick={() => setIsListOpen(!isListOpen)}
          >
            <FontAwesomeIcon icon={isListOpen ? faRectangleXmark : faBars} />
          </div>
        </div>

        <div className=" md:flex gap-5 md:max-[990px]:hidden hidden">
          <ul className="flex items-center gap-5">
            <NavMenu />
          </ul>

          <div className="flex items-center justify-between gap-4 py-4 px-1">
            <Button
              name={"LOGIN"}
              className={
                "bg-[#40739e] hover:bg-[#619ecf] text-white font-bold py-2 px-4 rounded w-full lg:text-nowrap"
              }
            />
            <Button
              name={"DONATE"}
              className={
                "bg-[#40739e] hover:bg-[#619ecf] text-white font-bold py-2 px-4 rounded w-full lg:text-nowrap"
              }
            />
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:gap-2 items-center lg:max-[1160px]:hidden">
          <Socials
            className={
              "hidden w-10 h-10 lg:flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-red-500"
            }
            href={"https://www.instagram.com/foracause__/"}
            icon={faInstagram}
            size={"lg"}
          />
          <Socials
            className={
              "hidden w-10 h-10 lg:flex items-center justify-center rounded-full bg-blue-500"
            }
            href={
              "https://www.linkedin.com/in/for-a-cause-social-welfare-association-6a2899220"
            }
            icon={faLinkedin}
            size={"lg"}
          />
          <Socials
            className={
              "hidden w-10 h-10 lg:flex items-center justify-center rounded-full bg-blue-400"
            }
            href={"https://x.com/foracausehitam?t=yUmnRxgcf7DnLt-e2UK88w&s=09"}
            icon={faTwitter}
            size={"lg"}
          />
        </div>
        {/* Mobile nav */}
        <ul
          className={` md:min-[990px]:hidden absolute w-full bg-white p-5 top-[0.01rem] overflow-y-auto py-32 pl-4 duration-500      
         ${isListOpen ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavMenu />
          <div className=" md:min-[990px]:hidden flex items-center justify-between gap-4 py-4 px-1">
            <Button
              name={"LOGIN"}
              className={
                "bg-[#40739e] hover:bg-[#619ecf] text-white font-bold py-2 px-4 rounded w-full lg:text-nowrap"
              }
            />
            <Button
              name={"DONATE"}
              className={
                "bg-[#40739e] hover:bg-[#619ecf] text-white font-bold py-2 px-4 rounded w-full lg:text-nowrap"
              }
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
