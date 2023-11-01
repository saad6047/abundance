import React from "react";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

import logo from "../public/images/logo.png";

const footerNavigation = {
    solutions: [
        { name: "TryPay", href: "/products/trypay" },
        { name: "Features", href: "/#features" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ],
    legal: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-md px-6 pt-12 sm:max-w-7xl lg:px-8 lg:pt-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Image
                            src={logo}
                            alt="Abundance"
                            width={150}
                            height={150}
                        />

                        <p className="text-base text-gray-500">
                            Making the World a Better Place Through Seamless and
                            Secure Payments.
                        </p>
                        <div className="flex space-x-6">
                            <FacebookIcon className="text-gray-400 hover:text-gray-500 cursor-pointer" />
                            <InstagramIcon className="text-gray-400 hover:text-gray-500 cursor-pointer" />
                            <TwitterIcon className="text-gray-400 hover:text-gray-500 cursor-pointer" />
                            <TelegramIcon className="text-gray-400 hover:text-gray-500 cursor-pointer" />
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-gray-900">
                                    Quick Links
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-500 hover:text-gray-900"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-gray-900">
                                    Legal
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {footerNavigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-base text-gray-500 hover:text-gray-900"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 py-8">
                    <p className="text-base text-gray-400 xl:text-center">
                        &copy; 2023 Abundance, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
