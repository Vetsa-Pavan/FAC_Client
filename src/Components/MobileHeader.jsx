"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Socials from "./Socials";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const MobileHeader = () => {
  return (
    <div className="flex flex-row gap-2 items-center px-1 font-bold md:min-[990px]:hidden justify-between">
      <div className="flex gap-1">
        <div className="flex gap-1">
          <FontAwesomeIcon icon={faEnvelope} size="sm" className=" pt-2" />
          <p className=" text-sm pt-1">foracausehitam@gmail.com</p>
        </div>
        <div className="flex gap-1">
          <FontAwesomeIcon icon={faPhone} size="sm" className=" pt-2" />
          <p className=" text-sm pt-1">6301136672</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Socials
          className={
            " w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-red-500"
          }
          href={"https://www.instagram.com/foracause__/"}
          icon={faInstagram}
          size={"sm"}
        />
        <Socials
          className={
            " w-10 h-10 flex items-center justify-center rounded-full bg-blue-500"
          }
          href={
            "https://www.linkedin.com/in/for-a-cause-social-welfare-association-6a2899220"
          }
          icon={faLinkedin}
          size={"sm"}
        />
        <Socials
          className={
            " w-10 h-10 flex items-center justify-center rounded-full bg-blue-400"
          }
          href={"https://x.com/foracausehitam?t=yUmnRxgcf7DnLt-e2UK88w&s=09"}
          icon={faTwitter}
        />
      </div>
    </div>
  );
};

export default MobileHeader;
