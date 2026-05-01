"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const stats = [
  {
    value: "20+",
    text: "years experience in creative direction, design and video production",
  },
  {
    value: "100+",
    text: "marketing funnels planned, designed, produced and delivered",
  },
  {
    value: "750+",
    text: "videos, video ads, AI-motion graphic videos produced",
  },
  {
    value: "6,500+",
    text: "hours in total of educational videos produced",
  },
  {
    value: "12,000+",
    text: "digital products and services delivered",
  },
  {
    value: "$38M+",
    text: "marketing funnel conversions supported",
  },
];

const servicesData = [
  {
    id: "branding",
    title: "Branding & Strategy",
    description: "Build a clear, distinctive brand with a strong voice, sharp positioning, and storytelling that connects and converts. Whether creating from scratch or refining what exists, the goal is to elevate how your product is seen and understood—let’s shape it together.",
    image: "../assets/img/unumdigital-img (3).png",
    points: [
      { title: "Problem We Solve", point: "People don’t quickly understand your value." },
      { title: "What You Get", point: "Positioning, messaging, tone of voice, visual identity." },
      { title: "How We Support Your Growth", point: "Creates clarity with the positioning your product or service on the market, which is the foundation for any kind of conversion." }
    ]
  },
  {
    id: "web",
    title: "Web & Digital",
    description: "Design and develop high-performing websites, landing pages, and marketing assets that turn attention into action. From funnels to social, email, and AI-assisted visuals, every element is built to perform—ready when you are.",
    image: "../assets/img/unumdigital-img (2).png",
    points: [
      { title: "Problem We Solve", point: "Your website looks good but doesn’t perform." },
      { title: "What You Get", point: "UX/UI, landing pages, funnel & e-learning programs delivery system, static and animated digital assets" },
      { title: "How We Support Your Growth", point: "Turns clarity into action (leads, registrations, sales). Builds trust, demand and long-term momentum." }
    ]
  },
  {
    id: "video",
    title: "Video Production",
    description: "Create video content that captures attention and delivers impact from editing and motion to AI-assisted visuals and cinematic ads. Built to scale, designed to perform, let’s bring your message to life.",
    image: "../assets/img/unumdigital-img (3).png",
    points: [
      { title: "Problem We Solve", point: "Turns clarity into action (leads, bookings, sales). Hard to stand out in a crowded market." },
      { title: "What You Get", point: "Hero videos, social clips, variations, monthly refresh." },
      { title: "How We Support Your Growth", point: "Adds emotional impact and boosts conversions." }
    ]
  }
];

const testimonials = [
  {
    content: "The level of strategic insight and creative execution is world-class. They didn't just design a website; they built a brand system that performs.",
    author: "James Wilson",
    role: "CEO, TechFlow",
    image: "../assets/Image/testimonials-img.png"
  },
  {
    content: "Their video production quality is insane. The AI-assisted visuals they created for our campaign reached millions and tripled our conversions.",
    author: "Sarah Chen",
    role: "Marketing Director, Lumina",
    image: "../assets/Image/testimonials-img-1.png"
  },
  {
    content: "Working with this team changed how we see our own brand. The clarity they brought to our messaging was the missing piece for our growth.",
    author: "Marcus Miller",
    role: "Founder, GrowthOps",
    image: "../assets/Image/testimonials-img-2.png"
  }
];

export default function CreativeAgencySection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section className="w-full bg-[#161E23] px-4 py-6 md:px-6 md:py-0">
      <div className="mx-auto max-w-7xl ">
        <div className="rounded-[10px] ] p-4 md:pb-10 px-0">
          {/* HERO */}
          <div className="relative overflow-hidden rounded-[8px]">
            <div className="relative h-[260px] w-full sm:h-[360px] lg:h-[630px]">
              <img
                src="../assets/img/unumdigital-img (6).png"
                alt="Creative direction for brands"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              <div className="absolute left-5 top-1/2 z-10 max-w-[360px] -translate-y-1/2 md:left-8 md:max-w-[600px]">
                <h1 className="text-[24px] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[30px] md:text-[38px] lg:text-[42px]">
                 Creative direction for brands that need strategy, systems, and scale.
                </h1>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="rounded-full flex items-center gap-1 border border-white/10 bg-[#0000003B] px-3 py-1.5 text-[14px] font-medium text-white backdrop-blur-sm md:px-4 md:py-2">
                   <span className="flex h-6 w-6 items-center justify-center rounded-full ">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className=" text-[12px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                    </span>
                    Play Showreel
                  </button>
                  <Link 
                    href="/#our-work"
                    className="rounded-full border border-white/10 bg-[#0000003B] px-3 py-1.5 text-[14px] font-medium text-white backdrop-blur-sm transition-all hover:bg-black/40 md:px-5 md:py-2"
                  >
                    Our Work
                  </Link>
                 
                </div>
                
              </div>
            </div>
          </div>

          {/* STATS + CONTENT */}
          <div className="pt-20 grid gap-8 md:mt-10 md:grid-cols-[1fr_1.05fr] md:gap-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:gap-x-8 md:gap-y-8">
              {stats.map((item) => (
                <div key={item.value}>
                  <div className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#7997A8] md:text-[34px]">
                    {item.value}
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.45] text-white md:max-w-[186px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-[520px] md:pt-1">
              <h2 className="text-[24px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[28px] md:text-[30px]">
                Partner with world-class creative talents, and build your brand that need premium presentation.
              </h2>

              <p className="mt-5 text-[11px] leading-[140%] text-white md:text-[18px]">
                We brand products & services, create digital web experiences, and produce high-end CGI, AI-assisted static and motion visuals, and cinematic ad pieces.
              </p>

              <p className="mt-5 text-[11px] leading-[140%] text-white md:text-[18px]">
                Our team of experts has 20+ years of design & video production experience across education, consulting, healthcare, and tourism, turning complex business goals into high-performing creative systems that grow long-term value and revenue.
              </p>
            </div>
          </div>

          {/* SERVICES */}
          <div className="mt-10 scroll-mt-32 md:mt-36 md:mb-10" id="our-services">
            <h3 className="pt-24 md:pt-0  text-[28px] font-semibold tracking-[-0.04em] text-white md:text-[34px]">
              Our Services:
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {servicesData.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => swiperInstance?.slideTo(index)}
                  className={`rounded-full px-3 py-1.5 text-[16px] font-medium transition-all duration-300 ${activeServiceIndex === index
                    ? "bg-[#2B495A] text-[#fff]"
                    : "border border-[#2B495A] bg-[#161E23] text-[#fff] hover:bg-[#2B495A]/50"
                    }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* ATTACHED SECTION STYLE - SWIPER SLIDER */}
            <div className="mt-5">
              <Swiper
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveServiceIndex(swiper.activeIndex)}
                spaceBetween={20}
                slidesPerView={1}
                speed={600}
                className="services-swiper"
              >
                {servicesData.map((service) => (
                  <SwiperSlide key={service.id} className="!h-auto">
                    <div className="overflow-hidden rounded-[14px] bg-[#0d1d28] w-full">
                      <div className="grid md:grid-cols-[0.95fr_1.05fr] h-full">
                        {/* LEFT */}
                        <div className="bg-[#242E34] px-6 py-8 md:px-10 md:py-14 flex flex-col h-full">
                          <h4 className="text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[30px]">
                            {service.title}
                          </h4>

                          <p className="mt-4 max-w-[520px] text-[15px] leading-[1.7] text-white md:text-[16px]">
                            {service.description}
                          </p>

                          <div className="mt-8 space-y-6 flex-grow">
                            {service.points.map((item) => (
                              <div key={item.title}>
                                <div className="inline-flex rounded-[4px] bg-[#27455b] px-2.5 py-1 text-[14px] font-semibold text-white tracking-wide">
                                  {item.title}
                                </div>

                                <div className="mt-3 flex items-start gap-3">
                                  <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                                  <p className="max-w-[430px] text-[18px] leading-[1.6] text-white/90">
                                    {item.point}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* RIGHT */}
                        <div className="relative min-h-[300px] ">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="h-full w-full object-cover md:min-h-[500px]"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* NAVIGATION BUTTONS */}
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B242A] text-white transition-all hover:bg-[#2B495A] border border-[#2B495A]"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B242A] text-white transition-all hover:bg-[#2B495A] border border-[#2B495A]"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>


        </div>
      </div>

      <style jsx global>{`
        .services-swiper {
          height: auto;
          display: flex;
        }
        .services-swiper .swiper-wrapper {
          display: flex;
          align-items: stretch;
        }
        .services-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: #7997A8;
          opacity: 0.3;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #fff;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}