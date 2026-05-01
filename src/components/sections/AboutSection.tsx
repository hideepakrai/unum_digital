"use client";

import React from "react";
import Image from "next/image";

const teamMembers = [
    {
        name: "Nikola Mučnjak",
        role: "CEO & Creative Director",
        image: "/assets/img/unumdigital-img (5).png",

        bio: "Over the past 20+ years, I've led brand, design, and production across education, consulting, healthcare, tourism, and SaaS platforms. Biggest opportunity was designing for Coaching.com, one of the leading global education platforms, where I collaborated closely with top thought leaders, professors, and business professionals from the worlds prestige schools and universities, while leading creative teams and building scalable systems that supported both learning and revenue growth.\n\nAcross that time, I've led teams of 20+ creatives, developed 100+ marketing funnels contributing to over $38M in conversions, and directed the production of thousands of hours of educational and marketing content.\n\nToday, is to work with companies that want to raise the visual and overall value of their product, brand, and communication, and turn that into measurable growth.",
    },
    {
        name: "Hrvoje Kovačević",
        role: "Executive Producer",

        image: "/assets/img/unumdigital-img (7).png",
        bio: "Video producer, motion graphics artist, and cinematic storyteller with over 20 years of experience crafting high-end visual work for some of the world's most recognized brands. Over the years, he has contributed to projects for L'Oreal, Maybelline, Lexus, Peugeot, Nestlé, Nesquik, Pliva, Teva, Sandoz, and Novartis, among many others.\n\nHis expertise covers the full creative pipeline, from concept development and visual direction to motion design, editing, VFX, and premium post-production. With a strong eye for detail, atmosphere, and storytelling, Hrvoje is known for creating visually striking work that combines elegance, clarity, and cinematic impact.\n\nWhether developing branded campaigns, commercial content, or ambitious original projects, his goal is always the same: to create work that stands out, feels world-class, and connects with audiences on a deeper level.",
    },
    {
        name: "Tea Hreščič",
        role: "Creative Director",
        image: "/assets/img/unumdigital-img (8).png",
        bio: "Over the past 20+ years, I've led brand, design, and production across education, consulting, healthcare, tourism, and SaaS platforms. For more than a decade, I worked with Coaching.com, one of the leading global education platforms, where I collaborated closely with top thought leaders, professors, and business professionals, while leading creative teams and building scalable systems that supported both learning and revenue growth.\n\nAcross that time, I've led teams of 20+ creatives, developed 100+ marketing funnels contributing to over $38M in conversions, and directed the production of thousands of hours of educational and marketing content.\n\nToday, is to work with companies that want to raise the visual and overall value of their product, brand, and communication, and turn that into measurable growth.",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="w-full bg-[#161E23] scroll-mt-32 px-4 py-16 md:px-10 md:py-18">
            <div className="mx-auto max-w-7xl">
                {/* HERO BANNER SECTION */}
                <div className="relative mb-16 overflow-hidden rounded-t-[15px] md:mb-24">
                    <div className="relative h-[400px] w-full md:h-[500px]">
                        <img
                            src="/assets/img/mask-1.png"
                            alt="About Us Banner"
                            className="h-full w-full object-cover"
                        />
                        {/* OVERLAY */}
                        {/* <div className="absolute inset-0 bg-black/40" /> */}

                        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24">
                            <h2 className="text-[40px] font-medium tracking-[-0.04em] text-white md:text-[60px]">
                                About Us
                            </h2>
                            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.6] text-white/90 md:text-[20px]">
                                A team of experienced creatives, each with a long-standing career in the industry and deep expertise in our respective fields. With decades of experience, we bring together strategy, design, and execution to deliver work that performs. Across every collaboration, our goal remains the same: to raise the value of our clients’ products and their business in large.
                            </p>
                        </div>
                    </div>
                </div>

                {/* TEAM SECTION */}
                <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-12 md:gap-y-20">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="flex gap-6">
                            <div className="h-20 w-20 overflow-hidden rounded-[24px] border border-white/10 md:h-24 md:w-24 shrink-0">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-[20px] font-bold tracking-tight text-white md:text-[22px]">
                                        {member.name}
                                    </h3>
                                    <p className="text-[13px] font-medium text-white/50 md:text-[14px] uppercase tracking-wide">
                                        {member.role}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {member.bio.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="text-[13px] leading-[1.8] text-white/70 md:text-[14px]">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
