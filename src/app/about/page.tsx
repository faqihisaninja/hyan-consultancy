import Head from "next/head";
import Image from "next/image";

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
            <section className="py-16 px-4 md:px-8">
                <div className="container max-w-6xl mx-auto">
                    {/* <h2 className="text-3xl text-gray-800 mb-10 font-medium font-poppins text-center">
                        Meet Our Consultants
                    </h2> */}

                    {/* Photos and Titles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Consultant 1 */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-56 h-56 rounded-full overflow-hidden mb-4">
                                <Image
                                    src="/consultant-placeholder-1.jpg"
                                    alt="Helmi Ali"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-1 text-center">
                                Helmi Ali
                            </h3>
                            <h4 className="text-lg text-gray-600 text-center">
                                Director
                            </h4>
                        </div>

                        {/* Consultant 2 */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-56 h-56 rounded-full overflow-hidden mb-4">
                                <Image
                                    src="/consultant-placeholder-2.jpg"
                                    alt="Kate Chang"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-1 text-center">
                                Kate Chang
                            </h3>
                            <h4 className="text-lg text-gray-600 text-center">
                                Director
                            </h4>
                        </div>
                    </div>

                    {/* Detailed Biographies */}
                    <div className="grid grid-cols-1 gap-12">
                        {/* Helmi's Bio */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
                                Helmi Ali, Director
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                A well-experienced specialist legal recruiter,
                                Helmi is Co-Founder at Hyan Consulting. He
                                started in legal recruitment in 2011 at a
                                leading regional legal recruitment agency. Since
                                then, he has started and led recruitment teams
                                in Singapore and Malaysia. Helmi oversees
                                overall business management at Hyan Consulting
                                and specializes in senior placements for Legal,
                                Compliance and Corporate Secretarial positions.
                                Helmi holds a Bachelor&apos;s degree in
                                Communication Studies (Hons) from Wee Kim Wee
                                School of Communication and Information at
                                Nanyang Technological University. Prior to being
                                a recruiter, Helmi worked in the media industry
                                as a producer and director. His works have been
                                shown on Channel News Asia, BBC, Suria and also
                                premiered at the Singapore International Film
                                Festival. Outside of work, Helmi regularly
                                volunteers for a food bank and he is an
                                appointed core team member of the Yayasan
                                Mendaki Professional Network for Human Resource
                                which seeks to uplift the standards of HR
                                professionals. Helmi is also an avid field
                                hockey player.
                            </p>
                        </div>

                        {/* Kate's Bio */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
                                Kate Chang, Director
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Kate is a Co-Founder at Hyan Consulting. With
                                more than a decade of industry experience, Kate
                                is a distinguished legal recruiter recognised
                                for her unmatched expertise. She started her
                                recruitment career in 2013 at a leading regional
                                recruitment agency. Kate focuses on roles in
                                legal, financial compliance, anti-bribery
                                compliance, data privacy and protection,
                                governance, and risk. Kate holds a
                                Bachelor&apos;s degree in Engineering (Material
                                Science & Engineering) from Nanyang
                                Technological University. In her free time, she
                                volunteers at a food bank and enjoys staying
                                active through workouts at the gym and pilates.
                            </p>
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
