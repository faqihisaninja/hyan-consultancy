"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();
    const [shouldScroll, setShouldScroll] = useState(false);

    // Modified function to handle navigation and scrolling
    const scrollToServices = (e: React.MouseEvent) => {
        e.preventDefault();

        if (pathname !== "/") {
            // If not on home page, navigate to home page first
            setShouldScroll(true);
            router.push("/", { scroll: false });
        }
        // If already on home page, just scroll
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (shouldScroll && pathname === "/") {
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
            }
            setShouldScroll(false); // Reset the flag
        }
    }, [shouldScroll, pathname]);

    return (
        <footer className="bg-[#00838F] text-white py-8 px-4 md:px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Hyan Consulting</h2>
                    <p className="text-gray">
                        Specialised Recruitment Solutions For Leading
                        Organisations
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <div className="space-y-2">
                        <Link href="/about" className="block">
                            About Us
                        </Link>
                        <Link
                            href="/services"
                            className="block"
                            onClick={scrollToServices}
                        >
                            Services
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                    <div className="space-y-2">
                        <p>111 North Bridge Road</p>
                        <p>#20-04 Peninsula Plaza</p>
                        <p>Singapore 179098</p>
                        <p>contact@hyanconsulting.com</p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-5 pt-5 border-t border-[#80D9E2]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Column 1 */}
                    <div className="space-y-2">
                        <p>
                            © 2025 Hyan Consulting Ptd Ltd. All rights reserved.
                        </p>
                        <div className="flex space-x-4 text-sm">
                            <span>License No. 19S9699</span>
                            <span>|</span>
                            <Link href="/terms" className="hover:underline">
                                Terms of Use
                            </Link>
                            <span>|</span>
                            <Link href="/privacy" className="hover:underline">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    {/* Column 2 - Social Links */}
                    <div className="flex justify-end items-center space-x-4">
                        <Link
                            href="https://www.linkedin.com/company/hyan-consulting/"
                            className="bg-white p-2 rounded-full text-[#00838F] hover:bg-gray-100 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </Link>
                        <Link
                            href="https://wa.me/6597631424"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-full text-[#00838F] hover:bg-gray-100 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
