export default function Contact() {
    return (
        <main className="min-h-screen bg-[#F8FBFB]">
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#00B2CA] mb-6">
                        Contact Us
                    </h1>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-semibold text-[#006D77] mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We&apos;re here to help with all your HR needs.
                                Reach out to us for a consultation.
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-[#00B2CA] font-semibold">
                                        Address
                                    </h3>
                                    <p className="text-gray-600">
                                        123 Business Street
                                    </p>
                                    <p className="text-gray-600">
                                        City, Country
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#00B2CA] font-semibold">
                                        Email
                                    </h3>
                                    <p className="text-gray-600">
                                        contact@hyanconsultancy.com
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[#00B2CA] font-semibold">
                                        Phone
                                    </h3>
                                    <p className="text-gray-600">
                                        +1 234 567 890
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg border border-[#80D9E2]">
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
                                        className="w-full p-3 border border-[#80D9E2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
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
                                        className="w-full p-3 border border-[#80D9E2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
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
                                        className="w-full p-3 border border-[#80D9E2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#00B2CA] text-white py-3 px-6 rounded-lg hover:bg-[#006D77] transition-colors"
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
