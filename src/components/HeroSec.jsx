import React from 'react';
import HeroImg from '../assets/Hero-img.png';

// NOTE: No React hooks (useState, useEffect, etc.) are used, as requested.
const HeroSec = () => {
    return (
        <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                            Lessons and insights <br />
                            <span className="text-green-600">from 8 years</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 sm:max-w-xl sm:mx-auto lg:mx-0">
                            Where to grow your business as a photographer: site or social media?
                        </p>
                        <div className="mt-10">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Register
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
                        <img
                            src={HeroImg}
                            alt="Hero"
                            loading="lazy"
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSec;
