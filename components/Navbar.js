import React, { Fragment, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logoIcon from "../public/images/logo-icon.png";
import logo from "../public/images/logo.png";

const Navbar = () => {
    const router = useRouter();

    const productsModalRef = useRef(null);

    const handleMouseEnter = () => {
        productsModalRef.current.classList.remove("invisible");
        productsModalRef.current.classList.remove("opacity-0");
    };

    const handleMouseLeave = () => {
        productsModalRef.current.classList.add("invisible");
        productsModalRef.current.classList.add("opacity-0");
    };

    return (
        <Popover as="header" className="relative z-10">
            <div className="bg-gray-900 pt-6 pb-6">
                <nav
                    className="relative mx-auto flex max-w-7xl items-center justify-between px-6"
                    aria-label="Global"
                >
                    <div className="flex flex-1 items-center">
                        <div className="flex w-full items-center justify-between md:w-auto">
                            <Link href="/">
                                <span className="sr-only">Your Company</span>
                                <Image
                                    src={logoIcon}
                                    alt="Abundance"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <Bars3Icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="hidden space-x-8 md:ml-10 md:flex">
                            <div className="relative">
                                <p
                                    className="text-base font-medium text-white hover:text-gray-300 cursor-pointer"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Products
                                </p>

                                {/* products desktop modlal */}
                                <div
                                    ref={productsModalRef}
                                    className="absolute invisible opacity-0 top-8 left-0 w-72 bg-white p-2 rounded-md fadein-animation"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {/* trypay product */}
                                    <div
                                        className="cursor-pointer hover:bg-[#e6f5ff] transition-all p-2"
                                        onClick={() =>
                                            router.push("/products/trypay")
                                        }
                                    >
                                        <div className="flex items-center mb-2">
                                            <Image
                                                src={logoIcon}
                                                alt="trypay"
                                                width={18}
                                                className="mr-2"
                                            />
                                            <h1 className="font-semibold">
                                                Trypay
                                            </h1>
                                        </div>

                                        <p className="text-xs">
                                            Accept payments from customers.
                                            Automate payouts to vendors &
                                            employees
                                        </p>
                                    </div>

                                    {/* <div className="cursor-pointer hover:bg-[#e6f5ff] transition-all p-2">
                                        <div className="flex items-center mb-2">
                                            <Image
                                                src={logoIcon}
                                                alt="trypay"
                                                width={18}
                                                className="mr-2"
                                            />
                                            <h1 className="font-semibold">
                                                Sadapay
                                            </h1>
                                        </div>

                                        <p className="text-xs">
                                            Accept payments from customers.
                                            Automate payouts to vendors &
                                            employees
                                        </p>
                                    </div> */}
                                </div>
                            </div>

                            <Link
                                href={"/#features"}
                                className="text-base font-medium text-white hover:text-gray-300"
                            >
                                Features
                            </Link>

                            <Link
                                href={"/about"}
                                className="text-base font-medium text-white hover:text-gray-300"
                            >
                                About Us
                            </Link>

                            <Link
                                href={"/contact"}
                                className="text-base font-medium text-white hover:text-gray-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-md border border-transparent text-gray-900 bg-white px-4 py-2 text-base font-medium hover:bg-secondary transition-all outline-none"
                        >
                            Get In Touch
                        </a>
                    </div>
                </nav>
            </div>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
                >
                    <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                        <div className="flex items-center justify-between px-5 pt-4">
                            <div onClick={() => router.push("/")}>
                                <Image
                                    className="cursor-pointer"
                                    src={logo}
                                    alt="Abundace"
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="pb-6 pt-5">
                            <div className="space-y-1 px-2">
                                <p className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 cursor-pointer">
                                    Products
                                </p>

                                <div
                                    className="flex items-center px-3 py-2 pl-6 cursor-pointer hover:bg-gray-50"
                                    onClick={() => {
                                        router.push("/products/trypay");
                                    }}
                                >
                                    <Image
                                        src={logoIcon}
                                        alt="trypay"
                                        width={18}
                                        className="mr-2"
                                    />
                                    <h1 className="font-semibold">Trypay</h1>
                                </div>

                                <a
                                    href={"/#features"}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>

                                <a
                                    href={"/about"}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                                >
                                    About Us
                                </a>

                                <a
                                    href={"/contact"}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                                >
                                    Contact Us
                                </a>
                            </div>
                            <div className="mt-6 px-5">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-primary px-4 py-3 font-medium text-white shadow outline-none hover:bg-secondary hover:text-gray-900 transition-all"
                                >
                                    Get In Touch
                                </button>
                            </div>
                            <div className="mt-6 px-5">
                                <p className="text-center text-base font-medium text-gray-500">
                                    New customer?{" "}
                                    <a
                                        href="#"
                                        className="text-gray-900 hover:underline"
                                    >
                                        Learn More
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default Navbar;
