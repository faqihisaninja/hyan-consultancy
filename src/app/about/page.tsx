import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main className="bg-[#F8FBFB]">
            <Head>
                <title>About Us | Hyan Consulting</title>
                <meta
                    name="description"
                    content="Learn about Hyan Consulting, your trusted partner in legal and compliance recruitment across Southeast Asia."
                />
            </Head>

            <div className="relative h-[300px] md:h-[400px] w-full">
                <Image
                    src="/about-background.jpg"
                    alt="People connecting"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        About Us
                    </h1>
                </div>
            </div>

            {/* Who We Are */}
            <section className="pt-16 px-4 md:px-8">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-3xl text-gray-800 mb-6 font-medium font-poppins">
                        Who We Are
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Hyan Consulting is a boutique recruitment agency
                        dedicated to connecting exceptional talent with stellar
                        organizations. With over 25 years of combined
                        experience, we are your trusted partner offering a
                        proven track record of success in meeting your
                        recruitment needs.
                    </p>
                </div>
            </section>

            {/* Our Consultants */}
            <section className="pt-16 px-4 md:px-8">
                <div className="container max-w-6xl mx-auto">
                    {/* Photos and Titles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                        {/* Consultant 1 */}
                        <div className="flex flex-col">
                            <div className="w-full md:w-2/3 mx-auto bg-[#00838F] rounded-lg p-7 shadow-md">
                                <div className="relative w-56 h-56 rounded-full overflow-hidden mb-4 mx-auto">
                                    <Image
                                        src="/consultant-placeholder-1.jpg"
                                        alt="Helmi Ali"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-3xl font-semibold text-white mb-2 text-center">
                                    Helmi Ali
                                </h2>
                                <p className="text-lg text-white mb-4 text-center">
                                    Director
                                </p>

                                <div className="flex justify-center">
                                    <Link
                                        href="/consultants"
                                        className="bg-white bg-opacity-10 px-4 py-2 rounded text-white hover:bg-opacity-20 transition-all"
                                    >
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Consultant 2 */}
                        <div className="flex flex-col">
                            <div className="w-full md:w-2/3 mx-auto bg-[#00838F] rounded-lg p-7 shadow-md">
                                <div className="relative w-56 h-56 rounded-full overflow-hidden mb-4 mx-auto">
                                    <Image
                                        src="/consultant-placeholder-2.jpg"
                                        alt="Kate Chang"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-3xl font-semibold text-white mb-2 text-center">
                                    Kate Chang
                                </h2>
                                <p className="text-lg text-white mb-4 text-center">
                                    Director
                                </p>

                                <div className="flex justify-center">
                                    <Link
                                        href="/consultants"
                                        className="bg-white bg-opacity-10 px-4 py-2 rounded text-white hover:bg-opacity-20 transition-all"
                                    >
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Reach */}
            <section className="bg-gray-50 pt-16 px-4 md:px-8">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-3xl text-gray-800 mb-6 font-medium font-poppins">
                        Our Reach
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        While our primary focus is on legal and compliance
                        placements in Singapore, our expertise extends to
                        Malaysia, Hong Kong, and other Southeast Asian regions,
                        allowing us to serve clients and candidates across the
                        broader SEA market.
                    </p>
                </div>
            </section>

            {/* Our Specialization */}
            <section className="pt-16 px-4 md:px-8">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-3xl text-gray-800 mb-6 font-medium font-poppins">
                        Our Specialization in Legal & Compliance Recruitment
                    </h2>
                    <p className="text-gray-700 mb-4">
                        At Hyan Consulting, we recognize the unique demands of
                        the legal and compliance industry. We work closely with
                        law firms, in-house legal departments, and government
                        agencies in recruiting all sub-functions under the Legal
                        & Compliance umbrella. The roles we fill include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>General Counsel and In-House Counsel</li>
                        <li>Data Protection Officer (DPO)</li>
                        <li>
                            Chief Compliance Officer, Compliance & Risk
                            Professional
                        </li>
                        <li>Partner and Associate in law firms</li>
                        <li>
                            Legal Administrative and Support Staff Recruitment
                        </li>
                        <li>Corporate Secretaries</li>
                    </ul>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-50 py-16 px-4 md:px-8">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-3xl text-gray-800 mb-6 font-medium font-poppins">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        By partnering with Hyan Consulting, you can rely on a
                        team of experts who take a personalized approach to
                        every search. We tailor our strategies to align with the
                        culture, values, and goals of both our clients and
                        candidates. Our unwavering commitment to excellence,
                        along with our focus on building lasting partnerships,
                        ensures we deliver exceptional talent that drives
                        long-term success and growth.
                    </p>
                </div>
            </section>
        </main>
    );
}
