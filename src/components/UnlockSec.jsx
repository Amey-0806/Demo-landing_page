import React from 'react';

const Unlock = () => {
    return (
        <section className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex justify-center lg:justify-start mb-12 lg:mb-0">
                        <img src="./body-img-1.png" loading='lazy' alt="" />
                    </div>

                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl leading-snug">
                            The unseen of spending three <br className="hidden sm:inline" /> years at Pixelgrade
                        </h2>
                        <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-xl lg:max-w-none lg:mx-0 mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Unlock;
