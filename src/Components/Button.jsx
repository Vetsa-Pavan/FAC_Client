import React from "react";

const Button = ({ name }) => {
  return (
    <button className="text-white bg-[#4a3aff] px-6 py-2 rounded-md">
      {name}
    </button>
  );
};

export default Button;
