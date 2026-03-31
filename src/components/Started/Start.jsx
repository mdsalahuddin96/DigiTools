import React from "react";
import StartCard from "./StartCard";
import Heading from "../Heading";
const cardData=[
    {
        id:1,
        title:'Create Account',
        description:'Sign up for free in seconds. No credit card required to get started.',
        icon:'/image/user.png'
    },
    {
        id:2,
        title:'Choose Products',
        description:'Browse our catalog and select the tools that fit your needs.',
        icon:'/image/package.png'
    },
    {
        id:3,
        title:'Start Creating',
        description:'Download and start using your premium tools immediately.',
        icon:'/image/rocket.png'
    }
]
const Start = () => {
    const title='Get Started in 3 Steps';
    const description='Start using premium digital tools in minutes, not hours.';
  return (
    <div className="bg-[#F9FAFC] py-28 space-y-10">
      <Heading title={title} description={description}/>
      <div className="max-w-300 mx-auto grid md:grid-cols-3 gap-7.5">
        {cardData.map(card=><StartCard key={card.id} card={card}></StartCard>)}
      </div>
    </div>
  );
};

export default Start;
