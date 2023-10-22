import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";

import { GridPattern } from "./GridPattern";

const Contact = () => {
    return (
        <div className="relative isolate bg-gray-900">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                            <div className="absolute inset-x-0 top-0 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-gray-900 z-0">
                                <GridPattern
                                    className="absolute inset-0 h-full w-full fill-gray-800 stroke-[#2f624f] [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                                    yOffset={-270}
                                />
                            </div>

                            <div
                                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                                aria-hidden="true"
                            >
                                <div
                                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-primary to-secondary opacity-20"
                                    style={{
                                        clipPath:
                                            "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                                    }}
                                />
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Contact Us
                        </h1>
                        <p className="relative mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
                            We would love to hear from you! Whether you are
                            interested in learning more about our services, have
                            a question for our team, or just want to say hi, we
                            are here to help.
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon
                                        className="h-7 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </dt>
                                <dd>
                                    545 Mavis Island
                                    <br />
                                    Chicago, IL 99191
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon
                                        className="h-7 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </dt>
                                <dd>
                                    <a
                                        className="hover:text-white"
                                        href="tel:+1 (555) 234-5678"
                                    >
                                        +1 (555) 234-5678
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon
                                        className="h-7 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </dt>
                                <dd>
                                    <a
                                        className="hover:text-white"
                                        href="mailto:hello@example.com"
                                    >
                                        hello@example.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form
                    action="#"
                    method="POST"
                    className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
                >
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-semibold leading-6 text-white"
                                >
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-semibold leading-6 text-white"
                                >
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold leading-6 text-white"
                                >
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm font-semibold leading-6 text-white"
                                >
                                    Phone number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold leading-6 text-white"
                                >
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="block w-[160px] rounded-md bg-primary px-3 py-2 font-medium text-white shadow outline-none hover:bg-secondary hover:text-gray-900 transition-all"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
