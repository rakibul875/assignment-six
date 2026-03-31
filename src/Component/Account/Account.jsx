import React from 'react';

const Account = () => {
    return (
        <div className='my-10 mx-auto bg-gray-100 py-10'>
            <div className="">
                <h1 className='text-5xl font-bold text-center text-[#101727]'>Get Started in 3 Steps</h1>
                <p className='text-center text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-10 w-[1200px] mx-auto gap-5">
                <div className="max-w-[340px] shadow-xl space-y-5 rounded-xl bg-white">

                    <p className='text-white text-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 rounded-[50%] mt-3 mx-75'>01</p>

                    <img className='mx-auto' src="/src/assets/user.png" alt="" />
                    <h1 className='text-2xl font-bold text-center text-[#101727]'>Create Account</h1>
                    <p className='text-center text-[#627382] mb-5'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className="max-w-[340px] shadow-xl space-y-5 rounded-xl bg-white">

                    <p className='text-white text-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 rounded-[50%] mt-3 mx-75'>02</p>

                    <img className='mx-auto' src="/src/assets/package.png" alt="" />
                    <h1 className='text-2xl font-bold text-center text-[#101727]'>Choose Products</h1>
                    <p className='text-center text-[#627382] mb-5'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className="max-w-[340px] shadow-xl space-y-5 rounded-xl bg-white">
                    <p className='text-white text-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-7 h-7 rounded-[50%] mt-3 mx-75'>03</p>
                    <img className='mx-auto' src="/src/assets/rocket.png" alt="" />
                    <h1 className='text-2xl font-bold text-center text-[#101727]'>Start Creating</h1>
                    <p className='text-center text-[#627382] mb-5'>Download and start using your premium tools immediately.</p>
                </div>

            </div>
        </div>
    );
};

export default Account;