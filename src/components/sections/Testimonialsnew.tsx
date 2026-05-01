"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Stat = {
  value: string;
  label: string;
};

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  stats: Stat[];
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Charlotte Saulny",
    role: "CEO of Coaching.com",
    image: "../assets/Image/testimonils1.png", // replace with your image
    quote: `"Nik is a positive, outgoing individual who is interested in making a positive impact with his design. He is highly collaborative by nature, receives feedback well and is happy to iterate on his design until it is 'just right'.

His design aesthetic is clean, crisp and colorful as can be seen from our most recent website which he designed."`,
    stats: [
      {
        value: "100+",
        label: "marketing funnels planned, designed and reviewed for Coaching.com.",
      },
      {
        value: "2,500+",
        label: "hours in total of educational videos produced.",
      },
      {
        value: "12,000+",
        label: "digital products designed and delivered.",
      },
    ],
  },
  {
    id: 2,
    name: "Marva Sadler",
    role: "Managing Director, MLS Odyssey LLC, acting COO, Coaches Rising",
    image: "../assets/Image/testimonils.png", // replace with your image
    quote: `"Nik worked as the Design Director while I was CEO of WBECS, and later  COO of Coaching.com. During that time, he produced not only amazing  graphics and designs, but also impeccable sales page and landing page  design structures that capitalized on essential data about copy length,  placement and nature of calls to action, and all sorts of other high ROI changes that led to greater success.  More importantly, he worked  quickly, regularly introduced valuable innovations, required very few  iterations, and never missed a deadline or caused drama.  He was a dream to work with."

`,
    stats: [
      {
        value: "88%",
        label: "Online sessions registration rate on average achieved.",
      },
      {
        value: "53%",
        label: "Average session show up rate after registration.",
      },
      {
        value: "11.7%+",
        label: "Reached Sales Conversion with high cost post-grad. online educational programs.",
      },
    ],
  },
];

export default function Testimonialsnew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden bg-[#161E23] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-8xl">
        {/* top heading box */}
        <div className="rounded-[16px] bg-[#1A2329] px-5 py-6 md:px-10 md:py-8">
          <h2 className="text-[18px] font-normal tracking-[-0.02em] text-white md:text-[30px]">
            What our clients think of collaborating with us:
          </h2>
        </div>

        {/* slider area */}
        <div className="relative mt-10 md:mt-14">
          {/* desktop arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-0 top-[28%] z-20 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-[#102330] text-white/80 transition hover:bg-[#153042] hover:text-white md:flex"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-0 top-[28%] z-20 hidden h-11 w-11 translate-x-1/2 items-center justify-center rounded-full bg-[#102330] text-white/80 transition hover:bg-[#153042] hover:text-white md:flex"
          >
            <ChevronRight size={18} />
          </button>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[213px_1fr] md:gap-12">
            {/* image */}
            <div className="flex justify-center md:justify-end">
              <div className="h-[80px] w-[80px] overflow-hidden rounded-[16px] bg-[#c9c9c9] md:h-[110px] md:w-[110px] md:rounded-[18px]">
                <img
                  src={current.image}
                  alt={current.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* content */}
            <div className="max-w-[860px]">
              <p className="whitespace-pre-line text-[14px] leading-[140%] text-white/90 md:text-[20px] md:leading-[140%]">
                {current.quote}
              </p>

              <div className="mt-5 md:mt-7">
                <h3 className="text-[13px] font-semibold text-white md:text-[18px]">
                  {current.name}
                </h3>
                <p className="mt-1 text-[10px] text-white/90 md:text-[14px]">
                  {current.role}
                </p>
              </div>

              {/* stats */}
              <div className="mt-8 grid grid-cols-1 gap-6 pt-2 md:mt-12 md:grid-cols-3 md:gap-0 w-full md:w-[1000px]">
                {current.stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`md:px-7 ${index !== 0 ? "md:border-l md:border-white/10" : ""} ${index === 0 ? "md:pl-0" : ""}`}
                  >
                    <h4 className="text-[30px] font-semibold tracking-[-0.04em] text-[#7997A8] md:text-[50px]">
                      {stat.value}
                    </h4>
                    <p className="mt-2 max-w-[400px] text-[10px] leading-[1.6] text-white md:text-[14px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* mobile arrows */}
          <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#102330] text-white/80"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#102330] text-white/80"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* bottom cta */}
        {/* <div className="mt-14 flex flex-col items-center justify-center text-center md:py-36">
          <h3 className="text-[24px] font-normal tracking-[-0.03em] text-white md:text-[46px]">
            Let’s bring your stories to life!
          </h3>

          <button className="mt-5 rounded-full bg-[#41e218] px-6 py-2 text-[12px] font-medium text-[#071720] transition hover:scale-[1.03] md:px-7 md:py-2.5 md:text-[14px]">
            Let&apos;s Talk
          </button>
        </div> */}
      </div>
    </section>
  );
}