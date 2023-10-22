import React from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Abundance | About Us</title>
                <meta name="description" content="M2M SOFTWARES" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-white">
                <div className="relative overflow-hidden">
                    {/* navbar section */}
                    <Navbar />

                    <About />

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default ContactPage;
