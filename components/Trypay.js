import React from "react";
import Image from "next/image";

import trypay from "../public/images/trypay.png";

const Trypay = () => {
    return (
        <div className="relative overflow-hidden bg-gray-900">
            <div
                className="hidden sm:absolute sm:inset-0 sm:block"
                aria-hidden="true"
            >
                <svg
                    className="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mb-0 lg:mt-28 xl:translate-x-0 xl:transform-none"
                    width={364}
                    height={384}
                    viewBox="0 0 364 384"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={364}
                        height={384}
                        fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
                    />
                </svg>
            </div>
            <div className="relative pb-16 pt-6 sm:pb-24">
                <main className="mt-16 sm:mt-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                                <div>
                                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span className="block">
                                            Payments made awesome with
                                        </span>
                                        <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text pb-3 text-transparent mt-3 sm:pb-5">
                                            Trypay
                                        </span>
                                    </h1>

                                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        TryPay is our flagship product, designed
                                        to provide a smooth and quick UPI
                                        payment experience for websites and
                                        apps. It is the ideal solution for
                                        businesses and individuals looking to
                                        streamline their online transactions
                                    </p>

                                    <div className="flex justify-center mt-6 sm:mt-8 lg:justify-start">
                                        <button
                                            type="submit"
                                            className="block w-[160px] rounded-md bg-primary px-4 py-3 font-medium text-white shadow outline-none hover:bg-secondary hover:text-gray-900 transition-all"
                                        >
                                            Sign Up Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-end mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 z-10">
                                <Image
                                    src={trypay}
                                    alt="trypay"
                                    className="z-10"
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Trypay;
