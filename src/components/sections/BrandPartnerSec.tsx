"use client";

import React from "react";
import Link from "next/link";

const BrandPartnerSec = () => {
  const partners = [
    {
      id: 1,
      title: "Coaching.com",
      category:
        "Creative Direction, Platform & Online Educational Delivery system UX & UI, Video Direction and Production...",
      image: "/assets/Image/img1.png",
      gridCols: "md:col-span-2",
      link: "/who-we-create-for/cdc",
    },
    {
      id: 2,
      title: "MySkin & Poliderma",
      category: "Branding, Web Design, Package Design",
      image: "/assets/Image/Rectangle 1815.png",
      gridCols: "md:col-span-1",
      link: "/who-we-create-for/poliderma",
    },
    {
      id: 3,
      title: "Castania",
      category: "Branding, Web Design, Package Design, Branding Strategy",
      image: "/assets/Image/Rectangle 1831.png",
      gridCols: "md:col-span-1",
      link: "/who-we-create-for/castania",
    },
    {
      id: 4,
      title: "Navada",
      category: "Branding & Copyright, Illustration, Package design",
      image: "/assets/Image/Rectangle 1813.png",
      gridCols: "md:col-span-2",
      link: "/who-we-create-for/navada",
    },
    {
      id: 5,
      title: "L’oreal Revitalift",
      category: "Direction and Storyboard",
      image: "/assets/Image/Rectangle 1814.png",
      gridCols: "md:col-span-2",
      link: "/who-we-create-for/loreal",
    },
    {
      id: 6,
      title: "Minglanje V Klanjcu",
      category: "Direction, Design",
      image: "/assets/Image/Rectangle1828.png",
      gridCols: "md:col-span-1",
      link: "/who-we-create-for/minglanje-v-klanjcu",
    },
    {
      id: 7,
      title: "Karlo Ban",
      category: "Branding, Web Design, Video Production & Direction",
      image: "/assets/Image/Rectangle 1821.png",
      gridCols: "md:col-span-1",
      link: "/who-we-create-for/karlo-ban",
    },
    {
      id: 8,
      title: "Samoborski Tamburatorij",
      category: "Creative Direction, Branding, Photography",
      image: "/assets/Image/Rectangle 1832.png",
      gridCols: "md:col-span-2",
      link: "/who-we-create-for/local-boutique-brands",
    },
    {
      id: 9,
      title: "MyRent - Case Study",
      category: "Marketing Strategy, UX, SEO, Content Creation",
      image: "/assets/Image/Rectangle 1826.png",
      gridCols: "md:col-span-2",
      link: "/who-we-create-for/myrent",
    },
    {
      id: 10,
      title: "Vila Lovelos",
      category: "Web Design, Video Production & Direction, Storyboard",
      image: "/assets/Image/Frame.png",
      gridCols: "md:col-span-1",
      link: "/who-we-create-for/tourism-travel",
    },
    {
      id: 11,
      title: "Marcia Reynolds",
      category: "Branding, Funnel & Landing Page Design, Video Production",
      image: "/assets/Image/Rectangle 1827.png",
      gridCols: "md:col-span-1",
      link: "/who-we-create-for/education-e-learning",
    },
    {
      id: 12,
      title: "EXO - Life and Beyond Story",
      category: "Concept, direction and storyboard",
      image: "/assets/Image/Rectangle 1876.png",
      gridCols: "md:col-span-2",
      link: "/who-we-create-for/expo-life-far-beyond",
    },
    {
      id: 13,
      title: "TIS Group Rebranding",
      category: "Branding, Web Design, Illustration",
      image: "/assets/Image/tis-img.png",
      gridCols: "md:col-span-1",
      link: "/who-we-create-for/tis-group-rebranding",
    },
    {
      id: 14,
      title: "Casa Horizontes",
      category: "Branding, Web Design",
      image: "/assets/Image/Rectangle 1879.png",
      gridCols: "md:col-span-1",
      link: "/who-we-create-for/tourism-travel",
    },
  ];

  return (
    <section id="our-work" className="bg-[#101a21] px-4 py-12 md:px-8 md:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16 max-w-2xl mx-auto">
          <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[40px] md:pt-4">
            Some of the stories that we <br className="hidden md:block" /> had privilege to co-create!
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[14px] leading-[1.7] text-white/75 md:text-[18px]">
            More than just work – these are the stories of inspiring creative
            partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-x-5 md:gap-y-10">
          {partners.map((partner) => (
            <Link
              href={partner.link}
              key={partner.id}
              className={`group flex flex-col ${partner.gridCols}`}
            >
              <div className="mb-3 overflow-hidden rounded-[18px] bg-white/5">
                <div className="h-[220px] w-full sm:h-[260px] md:h-[228px] lg:h-[238px]">
                  <img
                    src={partner.image}
                    alt={partner.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="px-[2px]">
                <h3 className="text-[18px] font-semibold leading-[1.25] text-white transition-colors duration-300 group-hover:text-[#dfe7ee] md:text-[17px] lg:text-[18px]">
                  {partner.title}
                </h3>
                <p className="mt-1 text-[11px] italic leading-[1.5] text-white/75 md:text-[11px]">
                  {partner.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartnerSec;