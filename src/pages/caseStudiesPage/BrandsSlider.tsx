"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Truck,
  Star,
  RotateCcw,
  MessageCircle,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: <Truck className="w-10 h-10 text-orange-500" />,
    title: "Free Delivery",
    desc: "from $40",
  },
  {
    icon: <Star className="w-10 h-10 text-orange-500" />,
    title: "Best Quality",
    desc: "Brand",
  },
  {
    icon: <RotateCcw className="w-10 h-10 text-orange-500" />,
    title: "1 Year",
    desc: "for free Return",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-orange-500" />,
    title: "Feedback",
    desc: "98% Real Data",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-orange-500" />,
    title: "Payment",
    desc: "Secure",
  },
];

const brands = [
  { img: "/assets/Image/project-logo.svg", alt: "Apple logo" },
  { img: "/assets/Image/project-logo2.svg", alt: "Apple logo" },
  { img: "/assets/Image/project-logo3.svg", alt: "Swoosh logo" },
  { img: "/assets/Image/project-logo4.svg", alt: "Hult logo" },
  { img: "/assets/Image/project-logo5.svg", alt: "Mercedes logo" },
  { img: "/assets/Image/project-logo6.svg", alt: "Amazon logo" },


];





const BrandsSlider = () => {
  return (
    <div className="bg-white pt-0 pb-16 container-xl">
      <div className=" mx-auto">
        {/* ---------- Bottom Brand Slider ---------- */}
        <div className="flex justify-center italic text-sm font-medium text-[#555555]">
          <span className="text-center pb-6">Developed in collaboration with professionals from leading international education and consulting organizations.</span>
        </div>
        <div className="pt-8 px-5 sm:px-5">
          <Swiper
            slidesPerView={8}
            spaceBetween={30}
            loop={true}
            navigation={false}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="flex items-start">
            {brands.map((brand, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-start opacity-90 hover:opacity-100 transition-all">
                  <img
                    src={brand.img}
                    alt={brand.alt}
                    className="h-9 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;
