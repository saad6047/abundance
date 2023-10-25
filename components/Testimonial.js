import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";

import { Container } from "@/components/Container";

const reviews = [
    {
        title: "It really works.",
        body: "TryPay has made our transactions so smooth. Highly recommended!.",
        author: "CrazyInvestor",
        rating: 5,
    },
    {
        title: "You need this app.",
        body: "The security features of TryPay are top-notch. We trust it with our payments.",
        author: "CluelessButRich",
        rating: 5,
    },
    {
        title: "This shouldn’t be legal.",
        body: "Efficiency and reliability define TryPay. It's the go-to choice for our business",
        author: "LivingDaDream",
        rating: 5,
    },
    {
        title: "Screw financial advisors.",
        body: "TryPay is a game-changer for our business. It's reliable, secure, and incredibly user-friendly.",
        author: "JordanBelfort1962",
        rating: 5,
    },
    {
        title: "I love it!",
        body: "The speed at which TryPay processes payments is unmatched. It has made a significant impact on our customer satisfaction.",
        author: "MrBurns",
        rating: 5,
    },
    {
        title: "Too good to be true.",
        body: "We trust TryPay for all our online transactions. The security measures are top-notch.",
        author: "LazyRich99",
        rating: 5,
    },
    {
        title: "Wish I could give 6 stars",
        body: "Using TryPay has been a breeze. We've seen a significant increase in our online sales since integrating it.",
        author: "SarahLuvzCash",
        rating: 5,
    },
    {
        title: "Bought an island.",
        body: "We've tried other payment gateways, but TryPay stands out in terms of reliability and speed.",
        author: "ScroogeMcduck",
        rating: 5,
    },
    {
        title: "No more debt!",
        body: "With TryPay, we no longer worry about payment-related challenges. It's a stress-free solution.",
        author: "BruceWayne",
        rating: 5,
    },
    {
        title: "I’m 13 and I’m rich.",
        body: "Choosing TryPay was one of the best decisions we made. It's improved our bottom line significantly.",
        author: "RichieRich",
        rating: 5,
    },
    {
        title: "Started an investment firm.",
        body: "TryPay's payment analytics have given us valuable insights into our business. It's a data-driven solution",
        author: "TheCountOfMonteChristo",
        rating: 5,
    },
    {
        title: "It’s like a superpower.",
        body: "We've seen a decrease in payment errors and disputes since using TryPay. It's a win for both us and our customers.",
        author: "ClarkKent",
        rating: 5,
    },
    {
        title: "Quit my job.",
        body: "TryPay has helped us expand our online presence. We're reaching new customers effortlessly.",
        author: "GeorgeCostanza",
        rating: 5,
    },
    {
        title: "Don’t download this app",
        body: "Our customers have commended us for using TryPay. It's elevated our brand reputation.",
        author: "JeffBezos",
        rating: 5,
    },
];

function StarIcon(props) {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

function StarRating({ rating }) {
    return (
        <div className="flex">
            {[...Array(5).keys()].map((index) => (
                <StarIcon
                    key={index}
                    className={clsx(
                        "h-5 w-5",
                        rating > index ? "fill-primary" : "fill-gray-300"
                    )}
                />
            ))}
        </div>
    );
}

function Review({ title, body, author, rating, className, ...props }) {
    let animationDelay = useMemo(() => {
        let possibleAnimationDelays = [
            "0s",
            "0.1s",
            "0.2s",
            "0.3s",
            "0.4s",
            "0.5s",
        ];
        return possibleAnimationDelays[
            Math.floor(Math.random() * possibleAnimationDelays.length)
        ];
    }, []);

    return (
        <figure
            className={clsx(
                "animate-fade-in rounded-3xl bg-gray-200 p-6 opacity-0 shadow-md shadow-gray-900/5",
                className
            )}
            style={{ animationDelay }}
            {...props}
        >
            <blockquote className="text-gray-900">
                <StarRating rating={rating} />
                <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
                    {title}
                </p>
                <p className="mt-3 text-base leading-7">{body}</p>
            </blockquote>
            <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
                {author}
            </figcaption>
        </figure>
    );
}

function splitArray(array, numParts) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let index = i % numParts;
        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(array[i]);
    }
    return result;
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
    let columnRef = useRef(null);
    let [columnHeight, setColumnHeight] = useState(0);
    let duration = `${columnHeight * msPerPixel}ms`;

    useEffect(() => {
        if (!columnRef.current) {
            return;
        }

        let resizeObserver = new window.ResizeObserver(() => {
            setColumnHeight(columnRef.current?.offsetHeight ?? 0);
        });

        resizeObserver.observe(columnRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div
            ref={columnRef}
            className={clsx("animate-marquee space-y-8 py-4", className)}
            style={{ "--marquee-duration": duration }}
        >
            {reviews.concat(reviews).map((review, reviewIndex) => (
                <Review
                    key={reviewIndex}
                    aria-hidden={reviewIndex >= reviews.length}
                    className={reviewClassName?.(reviewIndex % reviews.length)}
                    {...review}
                />
            ))}
        </div>
    );
}

function ReviewGrid() {
    let containerRef = useRef(null);
    let isInView = useInView(containerRef, { once: true, amount: 0.4 });
    let columns = splitArray(reviews, 3);
    let column1 = columns[0];
    let column2 = columns[1];
    let column3 = splitArray(columns[2], 2);

    return (
        <div
            ref={containerRef}
            className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
        >
            {isInView && (
                <>
                    <ReviewColumn
                        reviews={[...column1, ...column3.flat(), ...column2]}
                        reviewClassName={(reviewIndex) =>
                            clsx(
                                reviewIndex >=
                                    column1.length + column3[0].length &&
                                    "md:hidden",
                                reviewIndex >= column1.length && "lg:hidden"
                            )
                        }
                        msPerPixel={10}
                    />
                    <ReviewColumn
                        reviews={[...column2, ...column3[1]]}
                        className="hidden md:block"
                        reviewClassName={(reviewIndex) =>
                            reviewIndex >= column2.length ? "lg:hidden" : ""
                        }
                        msPerPixel={15}
                    />
                    <ReviewColumn
                        reviews={column3.flat()}
                        className="hidden lg:block"
                        msPerPixel={10}
                    />
                </>
            )}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-900" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-900" />
        </div>
    );
}

const Testimonial = () => {
    return (
        <section
            id="reviews"
            aria-labelledby="reviews-title"
            className="bg-gray-900 pb-16 pt-20 sm:pb-24 sm:pt-32"
        >
            <Container>
                <span className="mt-2 text-3xl font-bold tracking-tight text-center sm:text-4xl block bg-gradient-to-r from-primary to-secondary bg-clip-text pb-3 text-transparent sm:pb-5">
                    What Abundance Clients Say
                </span>

                <p className="mx-auto mt-5 max-w-prose text-xl text-center text-gray-300">
                    Thousands of people have doubled their net-worth in the last
                    30 days.
                </p>
                <ReviewGrid />
            </Container>
        </section>
    );
};

export default Testimonial;
