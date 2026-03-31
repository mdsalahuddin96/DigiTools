import React from "react";
import Heading from "../Heading";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const title = "Simple, Transparent Pricing";
  const description =
    "Choose the plan that fits your needs. Upgrade or downgrade anytime.";
  return (
    <div className="py-28 space-y-10">
      <Heading title={title} description={description}></Heading>
      <PricingCard></PricingCard>
    </div>
  );
};

export default Pricing;
