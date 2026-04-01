import React from 'react';

const BodyHero = () => {
    return (
        <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-20">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-white">Ready to Transform Your Workflow?</h1>
                    <p className="py-6 text-white">
                        Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
                    </p>
                    <button className="btn bg-white text-black rounded-full">Explore Products</button>
                    <button className="btn btn-outline text-black mx-5 rounded-full text-white">View Pricing</button>
                    <p className='text-white py-4'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default BodyHero;