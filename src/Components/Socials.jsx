import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = ({ className, href, icon }) => {
  return (
    <span className={className}>
      <a href={href}>
        <FontAwesomeIcon icon={icon} size="lg" className="text-white" />
      </a>
    </span>
  );
};

export default Socials;
