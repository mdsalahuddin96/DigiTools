import React from 'react';

const Stats = () => {
    return (
        <div className='max-w-300 mx-auto py-15 grid lg:grid-cols-3'>
            <div className='lg:border-r-2 border-amber-50 text-center'>
                <h2 className='text-[60px] font-extrabold text-white'>50K+</h2>
                <p className='text-2xl font-medium text-white'>Active Users</p>
            </div>
            <div className='lg:border-r-2 border-amber-50 text-center'>
                <h2 className='text-[60px] font-extrabold text-white'>200+</h2>
                <p className='text-2xl font-medium text-white'>Premium Tools</p>
            </div>
            <div className='text-center'>
                <h2 className='text-[60px] font-extrabold text-white'>4.9</h2>
                <p className='text-2xl font-medium text-white'>Rating</p>
            </div>

        </div>
    );
};

export default Stats;