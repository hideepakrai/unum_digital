"use client";

import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();
  return (
    // Section ko vertical padding di hai
    <section id="our-services" className="pb-36 pt-20 bg-white">

      {/* Saare content ko center aur max-width di hai */}
      <div className="container mx-auto max-w-3xl text-center px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#161E23]">
         Delivering on-demand excellence <br/>
for brands around the world
        </h2>

        {/* Paragraph */}
       

        {/* Button */}
        <div className="mt-10">
          <a href="/lets-talk#ask">
            <button className="bg-[#31AC00] hover:bg-[#31AC00] text-white font-medium py-3 px-8 rounded-full transition-all duration-300">
              {t("hero.lets_talk")}
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTASection;