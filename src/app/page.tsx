"use client";

import Image from "next/image";

export default function Home() {
    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();

        const contactForm = document.getElementById("contact");
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="h-[calc(100dvh-72px)] py-20 px-4 md:px-8 relative overflow-hidden flex items-center">
                {/* Background Graphics */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-handshake.jpg"
                        alt="Background pattern"
                        fill
                        className="object-cover object-top opacity-40 md:opacity-70"
                        priority
                    />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0"></div>

                {/* Content */}
                <div className="max-w-6xl mx-auto w-full relative z-10 grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-3 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl/[3.5rem] font-bold text-black mb-6 font-poppins">
                            Bridging Businesses With The Right Talent
                        </h1>
                        <p className="text-xl md:text-2xl text-black mb-8">
                            Specialised Recruitment Solutions For Leading
                            Organisations
                        </p>
                        <button
                            onClick={scrollToContact}
                            className="bg-[#00838F] hover:bg-[#0097A7] active:bg-[#006D75] text-white py-3 px-8 rounded-lg transition-colors font-medium text-lg shadow-md"
                        >
                            Find Talent Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-medium text-black mb-12 font-poppins text-center md:text-left">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg border border-[#00838F] shadow-md">
                            <h3 className="text-xl font-medium text-black mb-4 font-poppins">
                                Executive Search
                            </h3>
                            <p className="text-gray-600">
                                We specialize in identifying and attracting
                                top-tier talent for critical positions on a
                                contingent basis, ensuring that our clients
                                acquire the expertise and vision they need to
                                thrive.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-[#00838F] shadow-md">
                            <h3 className="text-xl font-medium text-black mb-4 font-poppins">
                                Retained Search
                            </h3>
                            <p className="text-gray-600">
                                Our comprehensive retained search services
                                encompass the entire hiring process, from
                                sourcing and screening candidates to onboarding
                                and integration, providing a tailored and
                                personalized approach to talent acquisition.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-[#00838F] shadow-md">
                            <h3 className="text-xl font-medium text-black mb-4 font-poppins">
                                Outplacement Services
                            </h3>
                            <p className="text-gray-600">
                                We provide personalized outplacement support to
                                individuals transitioning from one career
                                opportunity to another, empowering them with the
                                tools and resources they need to navigate the
                                job market successfully.
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
                                <div className="bg-[#00838F] rounded-full p-1 mr-3 mt-1">
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
                                        across Singapore, Malaysia, Hong Kong
                                        and Southeast Asia.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-[#00838F] rounded-full p-1 mr-3 mt-1">
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
                                <div className="bg-[#00838F] rounded-full p-1 mr-3 mt-1">
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
                                    <div className="bg-[#00838F] rounded-full p-2 mr-4 mt-1">
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
                                            111 North Bridge Road, Singapore
                                            179098
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#00838F] rounded-full p-2 mr-4 mt-1">
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
                                            +65 9763 1424
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#00838F] rounded-full p-2 mr-4 mt-1">
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
                                            contact@hyanconsulting.com
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
                                        className="w-full p-3 text-[#333] border border-[#00838F] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00838F]"
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
                                        className="w-full p-3 text-[#333] border border-[#00838F] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00838F]"
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
                                        className="w-full p-3 text-[#333] border border-[#00838F] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00838F]"
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
                                        className="w-full p-3 text-[#333] resize-none border border-[#00838F] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00838F]"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#00838F] hover:bg-[#0097A7] active:bg-[#006D75] text-white py-3 px-6 rounded-lg transition-colors font-medium"
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
