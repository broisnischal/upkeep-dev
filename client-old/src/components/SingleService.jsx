import React from 'react';
import Navbar from './Navbar.jsx';

const SingleService = () => {
    return (
        <>
            <Navbar />
            <section className="text-gray-600 bg-white dark:bg-gray-900 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="Plumber Service"
                            className="lg:w-1/2 w-full lg:h-96 h-64 object-contain object-center rounded "
                            src="https://www.britishgas.co.uk/aem6/content/dam/britishgas/images/home-services/engineer-plumbing-tap-360.jpg"
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 dark:text-gray-300 tracking-widest">
                                AITC Home Service Pvt Ltd.
                            </h2>
                            <h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium mb-1">
                                Plumber
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-green-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-green-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-green-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-green-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-green-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300 ml-3">
                                        4 Reviews
                                    </span>
                                </span>
                            </div>
                            <p className="leading-relaxed dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Aut earum perferendis nemo
                                facilis nobis commodi ea, dolor laboriosam
                                eveniet facere fugit reiciendis, sit deleniti
                                necessitatibus corporis nostrum atque animi
                                aspernatur?
                            </p>

                            <div className="flex ">
                                <span className="title-font font-medium text-2xl text-gray-900 dark:text-white">
                                    Rs. 1099
                                </span>
                            </div>
                            <button className="ml-auto  mt-4 rounded-md bg-green-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-red-500">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleService;
