import React from "react";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { GridPattern } from "./GridPattern";

const features = [
    {
        name: "Paymen Links",
        description:
            "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately",
        icon: CloudArrowUpIcon,
    },
    {
        name: "Payment Pages",
        description:
            "Take your store online instantly with zero coding. Accept international & domestic payments",
        icon: LockClosedIcon,
    },
    {
        name: "Payment Buttons",
        description:
            "Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more",
        icon: ArrowPathIcon,
    },
    {
        name: "Easy Integration",
        description:
            "With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour",
        icon: ShieldCheckIcon,
    },
    {
        name: "Powerful API",
        description:
            "Build your business for scale with our complete API-driven automation that requires zero manual intervention",
        icon: CogIcon,
    },
    {
        name: "Instant Activation",
        description:
            "Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation",
        icon: ServerIcon,
    },
];

const Features = () => {
    return (
        <div className="relative bg-transparent py-16 sm:py-24 lg:py-32">
            <div className="absolute inset-x-0 top-0 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50 z-0">
                <GridPattern
                    className="absolute inset-0 h-full w-full fill-neutral-100 stroke-gray-200 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                    yOffset={-270}
                />
            </div>
            <div className="relative mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8 z-10">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Everything you need for online payments
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                    Empower your business with all the right tools to accept
                    online payments and provide the best customer experience
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="pt-6 cursor-pointer"
                            >
                                <div className="flow-root rounded-lg bg-gray-100 px-6 pb-8 hover:bg-gray-200 transition-all custom-shadow">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                                                <feature.icon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                                            {feature.name}
                                        </h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
