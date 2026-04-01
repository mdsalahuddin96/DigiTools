import React from "react";

const Copyright = () => {
  return (
    <div className="max-w-300 mx-auto py-7.5 mt-20 text-white flex flex-col-reverse md:flex-row justify-between items-center border-t border-gray-400">
      <p>&copy; 2026 Digitools. All rights reserved.</p>
      <div className="flex justify-center items-center gap-4">
        <p>Privacy Policy</p> 
        <p>Terms of Service</p> 
        <p>Cookies</p>
      </div>
    </div>
  );
};

export default Copyright;
