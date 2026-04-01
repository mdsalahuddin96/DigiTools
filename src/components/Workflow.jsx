import React from "react";

const Workflow = () => {
  return (
    <div className="max-w-300 my-28 mx-auto text-white flex flex-col justify-center items-center gap-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-[40px] font-extrabold">Ready to Transform Your Workflow?</h1>
        <p >Join thousands of professionals who are already using Digitools to work smarter.<br/>Start your free trial today.</p>
      </div>
      <div className="text-center space-y-4">
        <button className="btn text-[16px] font-semibold rounded-full">
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            Explore Products
          </span>
        </button>
        <button className="btn btn-outline text-[16px] font-semibold rounded-full ml-4">View Pricing</button>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Workflow;
