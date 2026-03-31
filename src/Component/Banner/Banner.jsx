import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/src/assets/banner.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-4xl text-center lg:text-left text-[#101727] lg:text-7xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
                    <p className="py-6 text-[#627382] text-xl text-center lg:text-left">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>
                    <span className='flex'>
                        <button className="btn text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Explore Products</button>
                        <button className="btn btn-outline ml-3 rounded-full">Watch Demo</button>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Banner;