"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

// Data for the 4 industry cards
import { useTranslation } from "react-i18next";

export default function WhoWeCreateFor() {
  const { t } = useTranslation();

  // Data for the 4 industry cards
  const industries = [
    {
      title: t("work.tourism"),
      description: t("work.tourism_desc"),
      linkText: t("work.tourism_link"),
      image: "/assets/Image/travel.png",
      href: "/who-we-create-for/tourism-travel",
    },
    {
      title: t("work.learning"),
      description: t("work.learning_desc"),
      linkText: t("work.learning_link"),
      image: "/assets/Image/learning.png",
      href: "/who-we-create-for/education-e-learning",
    },
    {
      title: t("work.health"),
      description: t("work.health_desc"),
      linkText: t("work.health_link"),
      image: "/assets/Image/Beauty.png",
      href: "/who-we-create-for/health-pharma-beauty",
    },
    {
      title: t("work.local"),
      description: t("work.local_desc"),
      linkText: t("work.local_link"),
      image: "/assets/Image/local-Boutique.png",
      href: "/who-we-create-for/local-boutique-brands",
    },
  ];

  // Data for the stats block
  const stats = [
    {
      value: "$52M+",
      label: t("work.stat_revenue"),
    },
    {
      value: "12.000+",
      label: t("work.stat_products"),
    },
    {
      value: "2.300+",
      label: t("work.stat_video"),
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-0 md:py-18">
      <div className="max-w-8xl mx-auto px-0">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-semibold text-[#161E23] md:text-[40px]">
    Who We Create For (Mostly)?

          </h2>
          <p className="text-base text-gray-color md:text-lg">
          Most of our work covers forward-thinking businesses across tourism, health, beauty, charter and boutique industries - keeping them visible, trustworthy and alive.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {industries.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-[16px] bg-white transition-all duration-300 hover:-translate-y-1.5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[220px] w-full object-cover"
              />

              <div className="flex flex-grow flex-col bg-[#F8F8F8] p-6 md:p-7">
                <h4 className="mb-3 border-b border-[#DDDDDD] pb-4 text-[18px] font-semibold text-[#1F1F1F] md:text-[18px]">
                  {item.title}
                </h4>

                <p className="mb-6 text-[14px] leading-relaxed text-[#555555] md:text-[15px]">
                  {item.description}
                </p>

                <div className="mt-auto">
                  <hr className="mb-4 border-gray-200" />
                  <a
                    href={item.href}
                    className="group flex items-center gap-1 text-[15px] font-medium text-[#31AC00] transition-all hover:underline italic"
                  >
                    {item.linkText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
}