export default function About() {
    return (
        <main className="bg-[#F8FBFB]">
            <div className="relative h-[300px] md:h-[400px] w-full">
                <img
                    src="/connection.jpg"
                    alt="People connecting"
                    className="w-full h-full object-cover object-[50% 100%]"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        About Us
                    </h1>
                </div>
            </div>
            <section className="pt-12 pb-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600">
                                Hyan Consulting is a boutique recruitment agency
                                dedicated to connecting exceptional talent with
                                stellar organizations. With over 25 years of
                                combined experience, we are your trusted partner
                                offering a proven track record of success in
                                meeting your recruitment needs.
                            </p>
                            <p className="text-lg text-gray-600">
                                While our primary focus is on legal and
                                compliance placements in Singapore, our
                                expertise extends to Malaysia, Hong Kong and
                                other Southeast Asian regions, allowing us to
                                serve clients and candidates across the broader
                                SEA markets.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg border border-[#80D9E2]">
                            <h2 className="text-2xl font-semibold text-[#006D77] mb-4">
                                Our Values
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00B2CA] font-semibold">
                                        Excellence
                                    </span>
                                    <p className="text-gray-600">
                                        Delivering the highest quality solutions
                                        to our clients
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00B2CA] font-semibold">
                                        Integrity
                                    </span>
                                    <p className="text-gray-600">
                                        Operating with honesty and transparency
                                        in all we do
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00B2CA] font-semibold">
                                        Innovation
                                    </span>
                                    <p className="text-gray-600">
                                        Staying ahead with modern HR practices
                                        and solutions
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
