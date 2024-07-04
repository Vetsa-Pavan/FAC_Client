"use client";
import React, { useState } from "react";
import { lists } from "./NavList";

const NavMenu = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {lists.map((list) => (
        <div>
          <div>
            <h1>{list.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavMenu;
