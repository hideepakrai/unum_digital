"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ReCaptchaProps {
    id: string;
    checked?: boolean;
    onCheck?: (checked: boolean) => void;
    label?: string;
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({
    id,
    checked = false,
    onCheck,
    label = "I'm not a robot",
}) => {
    const handleToggle = () => {
        if (onCheck) onCheck(!checked);
    };

    return (
        <div className="flex h-[78px]  w-full max-w-[304px] select-none items-center justify-between  border border-gray-300 bg-[#F9F9F9] px-3 shadow-sm" style={{ borderRadius: "4px" }}>
            <label
                htmlFor={id}
                className="flex cursor-pointer items-center gap-3 text-sm font-normal text-gray-800"
            >
                <button
                    type="button"
                    onClick={handleToggle}
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm border border-gray-400 bg-white transition-all hover:border-gray-600 ${checked ? "border-[#31AC00] bg-[#31AC00]/10" : ""
                        }`}
                >
                    {checked && (
                        <svg
                            className="h-5 w-5 text-[#31AC00]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    )}
                    <input
                        type="checkbox"
                        id={id}
                        checked={checked}
                        onChange={handleToggle}
                        className="sr-only"
                    />
                </button>
                {label}
            </label>
            <div className="flex flex-shrink-0 flex-col items-center gap-1 leading-none text-gray-500 opacity-80">
                <img src="/assets/Image/re.svg" alt="reCAPTCHA logo" className="h-8 w-8" />
                <span className="text-[9px] text-gray-400">reCAPTCHA</span>
                <div className="flex gap-2 text-[9px] text-gray-400 hover:text-gray-600">
                    <a href="#" className="hover:underline">
                        Privacy
                    </a>
                    <a href="#" className="hover:underline">
                        Terms
                    </a>
                </div>
            </div>
        </div>
    );
};

const ContactFormsSec: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        website: "",
        message: "",
        services: [] as string[],
    });

    const [captchaChecked, setCaptchaChecked] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const servicesList = ["Brand", "Website", "Content", "Video", "Subscription", "Other"];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleServiceSelect = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            services: [service],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!captchaChecked) {
            alert("Please verify that you are not a robot.");
            return;
        }
        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            console.log("Form Submitted:", formData);
            alert("Thank you! Your message has been sent.");
            setSubmitting(false);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                website: "",
                message: "",
                services: [],
            });
            setCaptchaChecked(false);
        }, 1500);
    };

    const inputCls = "w-full border-b border-white/20 bg-transparent py-2 text-sm text-white outline-none focus:border-white/50 transition-colors placeholder:text-white/40";
    const labelCls = "text-[12px] font-semibold text-white/90 uppercase tracking-wider";

    return (
        <section id="lets-talk" className="w-full bg-[#161E23] scroll-mt-32 px-4 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-center text-[32px] font-light text-white md:mb-16 md:text-[40px]">
                    Let's bring your stories to life!
                </h2>

                <div className="grid gap-8 lg:grid-cols-[572px_1fr] lg:gap-16">
                    {/* LEFT PANEL */}
                    <div className="flex flex-col justify-between rounded-[24px] bg-[#1B242A] p-8 md:p-12 lg:min-h-[700px]">
                        <div>
                            <h3 className="text-[20px] font-semibold text-[#E5E5E5] md:text-[22px]">
                                Have Questions?
                            </h3>
                            <p className="mt-8 text-[22px] font-semibold leading-[1.3] text-white md:text-[30px]">
                                Tell us what you need — we’ll be more than happy to assist you on your journey
                            </p>
                        </div>

                        {/* <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4 text-white">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                                    <Mail size={20} className="text-white/70" />
                                </div>
                                <span className="text-[14px] md:text-[16px]">team@unum.digital</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                                    <Phone size={20} className="text-white/70" />
                                </div>
                                <span className="text-[14px] md:text-[16px]">+385 95 86 44 553</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                                    <MapPin size={20} className="text-white/70" />
                                </div>
                                <span className="text-[14px] md:text-[16px]">Samobor, Croatia</span>
                            </div>
                        </div> */}

                        <div className="mt-auto space-y-4 pt-10 text-[14px] text-white/95">
                            <div className="flex items-center gap-3">
                                <img src="/assets/Image/mail.svg" alt="email" className="w-8" />
                                <span>team@unum.digital</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/assets/Image/phone.svg" alt="phone" className="w-8" />
                                <span>+385 95 86 44 553</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/assets/Image/map.svg" alt="location" className="w-8" />
                                <span>Samobor, Croatia</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT PANEL - FORM */}
                    <div className="py-2">
                        <form onSubmit={handleSubmit} className="space-y-8 max-w-[550px]">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className={labelCls}>First Name*</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="First Name"
                                        required
                                        className={inputCls}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={labelCls}>Last Name*</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Last Name"
                                        required
                                        className={inputCls}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className={labelCls}>Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="name@gmail.com"
                                    required
                                    className={inputCls}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className={labelCls}>Company*</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder="Company Name"
                                    required
                                    className={inputCls}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className={labelCls}>Website <span className="text-[10px] opacity-60">(Optional)</span></label>
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    placeholder="URL"
                                    className={inputCls}
                                />
                            </div>

                            <div className="space-y-4">
                                <label className={labelCls}>Your message*</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Type here..."
                                    required
                                    rows={6}
                                    className="w-full rounded-[12px] border-none bg-white p-4 text-[16px] text-[#161E23] placeholder:text-gray-400 focus:ring-2 focus:ring-[#31AC00] outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-4">
                                <p className="text-[15px] font-semibold text-white">In what services are you interested in:</p>
                                <div className="flex flex-col gap-3">
                                    {servicesList.map((service) => (
                                        <label key={service} className="flex cursor-pointer items-center gap-4 text-white group">
                                            <div className="relative flex h-6 w-6 items-center justify-center">
                                                <input
                                                    type="radio"
                                                    name="service"
                                                    className="peer sr-only"
                                                    checked={formData.services.includes(service)}
                                                    onChange={() => handleServiceSelect(service)}
                                                />
                                                <div className="h-full w-full rounded-full border border-white/20 transition-all peer-checked:border-[#31AC00] group-hover:border-white/40"></div>
                                                <div className="absolute h-[11px] w-[11px] rounded-full bg-[#31AC00] opacity-0 transition-all scale-0 peer-checked:opacity-100 peer-checked:scale-100 shadow-[0_0_10px_#31AC00]"></div>
                                            </div>
                                            <span className="text-[16px] font-medium transition-colors group-hover:text-white">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-4">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex items-center gap-3 rounded-full bg-[#31AC00] px-6 py-2 text-[16px] font-medium text-white transition-all hover:bg-[#2d9802] disabled:opacity-50"
                                >

                                    <img src="../assets/img/contact-icon.svg" alt="" />
                                    {submitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                            <div className="pt-4 flex flex-col md:flex-row md:items-end justify-between gap-8">
                                <div className="space-y-6">
                                    <p className="text-[11px] leading-relaxed text-white/50 max-w-[400px]">
                                        All information you provide will be used in accordance with the terms of our <a href="#" className="text-[#31AC00] hover:underline">privacy policy</a>.
                                    </p>
                                    <ReCaptcha id="contact-captcha" checked={captchaChecked} onCheck={setCaptchaChecked} />
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormsSec;
