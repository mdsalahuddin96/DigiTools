import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div className="max-w-300 mx-auto flex justify-center items-center flex-col text-center space-y-4">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
      <p className="text-[16px] max-w-md text-[#627382]">{description}</p>
    </div>
  );
};

export default Heading;
