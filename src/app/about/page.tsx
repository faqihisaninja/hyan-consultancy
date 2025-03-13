export default function About() {
    return (
        <main className="min-h-screen bg-[#F8FBFB]">
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#00B2CA] mb-6">
                        About Us
                    </h1>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600">
                                Hyan Consultancy is a leading HR consulting firm
                                dedicated to helping businesses optimize their
                                human resources operations and strategy.
                            </p>
                            <p className="text-lg text-gray-600">
                                With years of experience in the industry, we
                                provide tailored solutions that help
                                organizations build stronger teams and achieve
                                their business objectives.
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
