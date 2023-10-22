import React from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Trypay from "@/components/Trypay";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import PartnersSlider from "@/components/PartnersSlider";
import FAQS from "@/components/FAQS";
import Team from "@/components/Team";

const trypay = () => {
    return (
        <>
            <Head>
                <title>Abundance | Trypay</title>
                <meta name="description" content="M2M SOFTWARES" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-white">
                <div className="relative overflow-hidden">
                    {/* navbar section */}
                    <Navbar />

                    {/* trypay hero section */}
                    <Trypay />

                    <Features />

                    {/* our partners section */}
                    <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
                        90% of India’s top tech startups are on Trypay
                    </p>
                    <PartnersSlider />

                    {/* FAQS section */}
                    <FAQS />

                    {/* team section */}
                    <Team title={"Team behind Trypay"} />

                    {/* footer section */}
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default trypay;
