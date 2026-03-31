import React from "react";
import { Check } from "lucide-react";
const PricingCard = () => {
  return (
    <div className="max-w-300 mx-auto grid md:grid-cols-3 gap-7">
      {/* first card */}
      <div className="border-2 border-[#F1F1F1] rounded-2xl p-6 flex flex-col gap-2">
        <div className="space-y-4 mt-4 grow">
          <h1 className="text-2xl font-bold">Starter</h1>
          <p className="text-[#627382]">Perfect for getting started</p>
          <div>
            <span className="text-2xl font-bold">$0</span>{" "}
            <span className="text-[#627382]">/Month</span>
          </div>
          <ul>
            <li className="flex items-center text-[#627382] text-[16px]">
              <Check className="mr-1 size-4 text-green-500" /> Access to 10 free
              tools
            </li>
            <li className="flex items-center text-[#627382] text-[16px]">
              <Check className="mr-1 size-4 text-green-500" /> Basic templates
            </li>
            <li className="flex items-center text-[#627382] text-[16px]">
              <Check className="mr-1 size-4 text-green-500" /> Community support
            </li>
            <li className="flex items-center text-[#627382] text-[16px]">
              <Check className="mr-1 size-4 text-green-500" /> 1 project per
              month
            </li>
          </ul>
        </div>
        <button className="btn text-[16px] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full mt-2">
          Get Started Free
        </button>
      </div>
      {/* second card */}
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl p-6 flex flex-col gap-2 relative">
        <span className="text-[#BB4D00] bg-[#FEF3C6] px-3 py-1.5 rounded-full absolute -top-5 right-1/3">
          Most Popular
        </span>
        <div className="space-y-4 mt-4 grow">
          <h1 className="text-2xl font-bold">Pro</h1>
          <p>Best for professionals</p>
          <div>
            <span className="text-2xl font-bold">$29</span> <span>/Month</span>
          </div>
          <ul>
            <li className="flex items-center text-[16px]">
              <Check className="mr-1 size-4" /> Access to all premium tools
            </li>
            <li className="flex items-center text-[16px]">
              <Check className="mr-1 size-4" /> Unlimited templates
            </li>
            <li className="flex items-center text-[16px]">
              <Check className="mr-1 size-4" /> Priority support
            </li>
            <li className="flex items-center text-[16px]">
              <Check className="mr-1 size-4" /> Unlimited projects
            </li>
            <li className="flex items-center text-[16px]">
              <Check className="mr-1 size-4" />
              Cloud sync
            </li>
            <li className="flex items-center text-[16px]">
              <Check className="mr-1 size-4" />
              Advanced analytics
            </li>
          </ul>
        </div>
        <button className="btn text-[16px] font-bold rounded-full mt-2">
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            Start Pro Trial
          </span>
        </button>
      </div>
      {/* third card */}
      <div className="border-2 border-[#F1F1F1] rounded-2xl p-6 flex flex-col gap-2">
        <div className="space-y-4 mt-4 grow">
          <h1 className="text-2xl font-bold">Enterprise</h1>
          <p className="text-[#627382]">For teams and businesses</p>
          <div>
            <span className="text-2xl font-bold">$99</span>{" "}
            <span className="text-[#627382]">/Month</span>
          </div>
          <ul>
            <li className="flex items-center text-[#627382] text-[16px]">
              <Check className="mr-1 size-4 text-green-500" /> Everything in Pro
              tools
            </li>
            <li className="flex items-center text-[#627382] text-[16px]">
              <Check className="mr-1 size-4 text-green-500" /> Team collaboration
            </li>
            <li className="flex items-center text-[#627382] text-[16px]">
              <Check className="mr-1 size-4 text-green-500" /> Custom integrations
            </li>
            <li className="flex items-center text-[#627382] text-[16px]">
              <Check className="mr-1 size-4 text-green-500" /> Dedicated support
            </li>
            <li className="flex items-center text-[#627382] text-[16px]">
              <Check className="mr-1 size-4 text-green-500" /> SLA guarantee
            </li>
            <li className="flex items-center text-[#627382] text-[16px]">
              <Check className="mr-1 size-4 text-green-500" /> Custom branding
            </li>
          </ul>
        </div>
        <button className="btn text-[16px] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full mt-2">
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
