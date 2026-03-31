import React from "react";
import { ShoppingCart } from "lucide-react";
const Nabvar = ({selectedItem, setActiveTab}) => {
  return (
    <div className="navbar max-w-300 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <h1 className="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          DigiTools
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px]">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="relative cursor-pointer" onClick={()=>setActiveTab('cart')}>
          {selectedItem.length>0&&
          <div className="flex justify-center items-center text-[12px] font-semibold bg-red-400 rounded-full w-4 h-4 absolute -top-2.5 -right-1 text-white">{selectedItem.length}</div>
          }
          <ShoppingCart />
        </div>
        <a className="text-[16px] font-semibold">Login</a>
        <a className="btn text-[16px] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Nabvar;
