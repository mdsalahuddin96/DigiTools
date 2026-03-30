import React from "react";
import { Play } from "lucide-react";
import bannerImage from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="max-w-300 mx-auto py-21.5 flex justify-center items-center gap-5 flex-col-reverse lg:flex-row lg:gap-15">
      <div className="py-24 space-y-4 px-4 lg:px-0">
        <div className="px-4 py-2 bg-[#E1E7FF] rounded-full flex gap-1 items-center max-w-73.5">
          <div className="w-4 h-4 rounded-full bg-linear-to-r from-[#b1abdf] to-[#d5c2e4] flex justify-center items-center">
            <div className="w-3 h-3 rounded-full bg-linear-to-r from-[#8078be] to-[#b987df] flex justify-center items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]"></div>
            </div>
          </div>
          <p className="text-[16px] font-medium text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            New: AI-Powered Tools Available
          </p>
        </div>
        <div>
          <h1 className="text-4xl lg:text-7xl font-extrabold lg:leading-20">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>
          <p className="text-lg text-[#627382] font-medium">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </div>
        <div className="flex gap-2">
          <a className="btn text-[16px] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full">
            Explore Products
          </a>
          <button className="btn btn-outline text-[16px] font-bold rounded-full border-[#4F39F6] hover:bg-transparent">
            <div className="flex items-center gap-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              <Play
                className="text-[#4F39F6]"
                size={20}
              />
              <span>Watch Demo</span>
            </div>
          </button>
        </div>
      </div>
      <div>
        <img
          className="object-contain w-full"
          src={bannerImage}
          alt="a man touched on a screen"
        />
      </div>
    </div>
  );
};

export default Banner;
