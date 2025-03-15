"use client";

import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 px-4 md:px-8 relative overflow-hidden">
                {/* Background Graphics */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-handshake.jpg"
                        alt="Background pattern"
                        fill
                        className="object-cover object-top opacity-70"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl/[3.5rem] font-bold text-black mb-6 font-poppins">
                            Bridging Businesses With The Right Talent
                        </h1>
                        <p className="text-xl md:text-2xl text-black max-w-2xl mb-8">
                            Specialised Recruitment Solutions For Leading
                            Organisations
                        </p>
                        <button
                            onClick={() => (window.location.href = "/contact")}
                            className="bg-[#26D7FD] text-white py-3 px-8 rounded-lg hover:bg-[#1ba8ca] transition-colors font-medium text-lg shadow-md"
                        >
                            Find Talent Now
                        </button>
                    </div>
                    {/* <div className="hidden md:block relative h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/hero-handshake.jpg"
                            alt="HR Professionals in a meeting"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div> */}
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-medium text-black mb-12 font-poppins text-center md:text-left">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg border border-[#26D7FD] shadow-md">
                            <h3 className="text-xl font-medium text-black mb-4 font-poppins">
                                Executive Search
                            </h3>
                            <p className="text-gray-600">
                                We specialize in identifying and attracting
                                top-tier talent for critical positions on a
                                contingent basis, ensuring that our clients
                                acquire the expertise and vision they need to
                                thrive
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-[#26D7FD] shadow-md">
                            <h3 className="text-xl font-medium text-black mb-4 font-poppins">
                                Retained Search
                            </h3>
                            <p className="text-gray-600">
                                Our comprehensive retained search services
                                encompass the entire hiring process, from
                                sourcing and screening candidates to onboarding
                                and integration, providing a tailored and
                                personalized approach to talent acquisition
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-[#26D7FD] shadow-md">
                            <h3 className="text-xl font-medium text-black mb-4 font-poppins">
                                Outplacement Services
                            </h3>
                            <p className="text-gray-600">
                                We provide personalized outplacement support to
                                individuals transitioning from one career
                                opportunity to another, empowering them with the
                                tools and resources they need to navigate the
                                job market successfully
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Hyan Section */}
            <section className="py-16 px-6 md:px-8 bg-[#F8FBFB]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-medium text-black mb-6 font-poppins text-center md:text-left">
                            Why Choose Hyan
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-[#26D7FD] rounded-full p-1 mr-3 mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-black font-poppins">
                                        Expertise and Experience
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        Our seasoned team brings specialized
                                        knowledge in legal recruitment,
                                        leveraging deep industry insights and
                                        networks to deliver exceptional results
                                        across Singapore, Malaysia Hong Kong and
                                        Southeast Asia.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-[#26D7FD] rounded-full p-1 mr-3 mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-black font-poppins">
                                        Tailored Solutions
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        We craft customized recruitment
                                        strategies to fit your unique needs,
                                        doing the heavy lifting so you
                                        don&apos;t have to.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-[#26D7FD] rounded-full p-1 mr-3 mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-black font-poppins">
                                        Commitment to Excellence
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        We&apos;re dedicated to exceeding
                                        expectations with top-quality service
                                        and outstanding outcomes.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="flex items-start">
                                <div className="bg-[#26D7FD] rounded-full p-1 mr-3 mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-black font-poppins">
                                        Regional Reach and Local Expertise
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        As part of a boutique network, we offer
                                        access to a global talent pool and
                                        seamless recruitment across Asia and
                                        beyond.
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="hidden md:block relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/why-hyan.jpg"
                            alt="Professional team meeting"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-medium text-black mb-4 font-poppins">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Have questions or need assistance? Our team
                                    is here to help you find the right talent
                                    for your organization.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-[#26D7FD] rounded-full p-2 mr-4 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-black">
                                            Address
                                        </h4>
                                        <p className="text-gray-600">
                                            123 Business Street, Singapore
                                            511213
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#26D7FD] rounded-full p-2 mr-4 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-black">
                                            Phone
                                        </h4>
                                        <p className="text-gray-600">
                                            +65 1234 5678
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#26D7FD] rounded-full p-2 mr-4 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-black">
                                            Email
                                        </h4>
                                        <p className="text-gray-600">
                                            contact@hyanconsultancy.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <form className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-700 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full p-3 text-[#333] border border-[#26D7FD] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#26D7FD]"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full p-3 text-[#333] border border-[#26D7FD] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#26D7FD]"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-gray-700 mb-2"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full p-3 text-[#333] border border-[#26D7FD] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#26D7FD]"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-gray-700 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        required
                                        className="w-full p-3 text-[#333] resize-none border border-[#26D7FD] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#26D7FD]"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#26D7FD] text-white py-3 px-6 rounded-lg hover:bg-[#1ba8ca] transition-colors font-medium"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
