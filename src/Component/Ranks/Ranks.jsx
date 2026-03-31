import React from 'react';

const Ranks = () => {
    return (

        <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
            <div className='grid grid-cols-2 lg:grid-cols-3 text-center'>
                <div className="my-8">
                    <h1 className='text-5xl text-white font-bold'>50K+</h1>
                    <p className='text-white'>Active Users</p>
                </div>
                <div className="my-8">
                    <h1 className='text-5xl text-white font-bold'>200+</h1>
                    <p className='text-white'>Premium Tools</p>
                </div>
                <div className="my-8">
                    <h1 className='text-5xl text-white font-bold'>4.9</h1>
                    <p className='text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Ranks;