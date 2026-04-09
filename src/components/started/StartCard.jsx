import React from 'react';

const StartCard = ({card}) => {
    return (
        <div className='border-2 border-[#F1F1F1] rounded-2xl space-y-4 p-5 flex flex-col items-center'>
            <div className='h-7 w-7 self-end flex justify-center items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full'>{card.id}
            </div>
            <div className='bg-[#F1F1F1] p-4 rounded-full'>
                <img src={card.icon} alt='userIcon'/>
            </div>
            <div className='text-center space-y-4 mb-20'>
                <h1 className='text-2xl font-bold'>{card.title}</h1>
                <p className="text-[16px] text-[#627382]">{card.description}</p>
            </div>
        </div>
    );
};

export default StartCard;