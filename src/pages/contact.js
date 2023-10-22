import React from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Abundance | Contact Us</title>
                <meta name="description" content="M2M SOFTWARES" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-white">
                <div className="relative overflow-hidden">
                    {/* navbar section */}
                    <Navbar />

                    <Contact />

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default ContactPage;
