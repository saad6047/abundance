import { React, useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import GetStarted from "@/components/GetStarted";
import Team from "@/components/Team";
import PartnersSlider from "@/components/PartnersSlider";

const Home = () => {
    const [isScrollToTopBtn, setIsScrollToTopBtn] = useState();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const checkScrollHeight = () => {
            if (window.pageYOffset > 300) {
                setIsScrollToTopBtn(true);
            } else {
                setIsScrollToTopBtn(false);
            }
        };

        window.addEventListener("scroll", checkScrollHeight);

        return () => {
            window.removeEventListener("scroll", checkScrollHeight);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Abundance | Solutions for Online Payments</title>
                <meta name="description" content="M2M SOFTWARES" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-white">
                <div className="relative overflow-hidden">
                    {/* navbar section */}
                    <Navbar />

                    {/* hero section */}
                    <main>
                        <div
                            style={{ height: "calc(100vh - 114px)" }}
                            className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8"
                        >
                            <div className="mx-auto max-w-7xl lg:px-8">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                    <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                                        <div className="lg:py-24">
                                            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                                <span className="block">
                                                    Your Gateway to
                                                </span>
                                                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text pb-3 text-transparent mt-3 sm:pb-5">
                                                    Financial Freedom
                                                </span>
                                            </h1>
                                            <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                                Accept payments from customers.
                                                Automate payouts to vendors &
                                                employees. Never run out of
                                                working capital.
                                            </p>
                                            <div className="flex justify-center mt-6 sm:mt-8 lg:justify-start">
                                                <button
                                                    type="submit"
                                                    className="block w-[160px] rounded-md bg-primary px-4 py-3 font-medium text-white shadow outline-none hover:bg-secondary hover:text-gray-900 transition-all"
                                                >
                                                    Get In Touch
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
                                        <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                                            {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                            <Image
                                                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                                src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                                                width={1000}
                                                height={1000}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature section with grid */}
                        <Features />

                        {/* Get started section */}
                        <GetStarted />

                        {/* our team section */}
                        <Team title={"Meet our team"} />

                        {/* our partners section */}
                        <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Partners
                        </p>
                        <PartnersSlider />

                        {/* testominial section */}
                        <Testimonial />
                    </main>

                    {/* footer section */}
                    <Footer />
                </div>
            </div>

            <div
                className={`fixed right-4 bottom-4 flex items-center justify-center bg-primary w-12 h-12 primary-bg rounded-md cursor-pointer transition-all duration-200 z-50 ${
                    isScrollToTopBtn
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                }`}
                onClick={scrollToTop}
            >
                <KeyboardArrowUpIcon className="text-white" />
            </div>
        </>
    );
};

export default Home;
