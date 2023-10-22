import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
    {
        question: "What exactly is Trypay?",
        answer: "Trypay is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.",
    },
    {
        question: "What exactly is Trypay?",
        answer: "Trypay is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.",
    },
    {
        question: "What exactly is Trypay?",
        answer: "Trypay is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.",
    },
    {
        question: "What exactly is Trypay?",
        answer: "Trypay is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.",
    },
    {
        question: "What exactly is Trypay?",
        answer: "Trypay is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.",
    },
    {
        question: "What exactly is Trypay?",
        answer: "Trypay is a platform that supercharges your business banking needs. It allows businesses to do everything from open a current account, track invoices, schedule payments, pay tax, apply for loans, and view financial reports, all from one dashboard. This helps businesses manage their finances seamlessly and have complete visibility and control over the company's finances.",
    },

    // More questions...
];

const FAQS = () => {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-4xl divide-y divide-white/10">
                    <p className="mt-2 text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">
                        Trypay - Frequently asked questions
                    </p>
                    <dl className="mt-20 space-y-6 divide-y divide-white/10">
                        {faqs.map((faq) => (
                            <Disclosure
                                as="div"
                                key={faq.question}
                                className="pt-6"
                            >
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                                                <span className="text-base font-semibold leading-7">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <PlusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel
                                            as="dd"
                                            className="mt-2 pr-12"
                                        >
                                            <p className="text-base leading-7 text-gray-300">
                                                {faq.answer}
                                            </p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default FAQS;
