import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#00B2CA] text-white py-8 px-4 md:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Hyan Consultancy
                    </h2>
                    <p className="text-[#80D9E2]">
                        Expert HR solutions tailored to your business needs
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <div className="space-y-2">
                        <Link
                            href="/about"
                            className="block hover:text-[#80D9E2]"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/services"
                            className="block hover:text-[#80D9E2]"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="block hover:text-[#80D9E2]"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                    <div className="space-y-2">
                        <p>123 Business Street</p>
                        <p>City, Country</p>
                        <p>contact@hyanconsultancy.com</p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#80D9E2]">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>© 2024 Hyan Consultancy. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-[#80D9E2]">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-[#80D9E2]">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
