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
                        src="/hero-background.jpg"
                        alt="Background pattern"
                        fill
                        className="object-cover opacity-10"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl/[3.5rem] font-bold text-black mb-6 font-poppins">
                            Bridging Businesses With The Right Talent
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8">
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
                    <div className="hidden md:block relative h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/handshake.jpg"
                            alt="HR Professionals in a meeting"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
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
                                        Industry Expertise
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        Our team brings decades of specialized
                                        experience in legal recruitment across
                                        various sectors.
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
                                        Personalized Approach
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        We take the time to understand your
                                        unique needs and culture to find the
                                        perfect match.
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
                                        Extensive Network
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        Access our vast network of top-tier
                                        legal professionals and industry
                                        connections.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-8 bg-[#26D7FD] text-white py-2 px-6 rounded-lg hover:bg-[#1ba8ca] transition-colors font-medium">
                            Learn More
                        </button>
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
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-medium text-black mb-8 font-poppins">
                        Get in Touch
                    </h2>
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
                                className="w-full p-3 text-[#333] border border-[#26D7FD] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#26D7FD]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
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
                                rows={4}
                                className="w-full p-3 text-[#333] resize-none border border-[#26D7FD] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#26D7FD]"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#26D7FD] text-white py-3 px-6 rounded-lg hover:bg-[#1ba8ca] transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
