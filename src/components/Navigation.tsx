"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "./Logo";

export default function Navigation() {
    const pathname = usePathname();
    const router = useRouter();
    const [shouldScroll, setShouldScroll] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Modified function to handle navigation and scrolling
    const scrollToServices = (e: React.MouseEvent) => {
        e.preventDefault();

        if (pathname !== "/") {
            // If not on home page, navigate to home page first
            setShouldScroll(true);
            router.push("/");
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
        <nav className="bg-white shadow-[0_5px_20px_0_rgba(11,7,110,0.04)]">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className="hover:opacity-90 transition-opacity"
                    >
                        <Logo />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-between items-center">
                        <div className="flex-1"></div>
                        <div className="flex space-x-8">
                            <Link
                                href="/"
                                className={`${
                                    pathname === "/"
                                        ? "text-[#1ba8ca]"
                                        : "text-gray-600 "
                                } hover:text-[#1ba8ca] }`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={`${
                                    pathname === "/about"
                                        ? "text-[#1ba8ca]"
                                        : "text-gray-600"
                                } hover:text-[#1ba8ca] }`}
                            >
                                About
                            </Link>
                            <Link
                                href="/services"
                                className="text-gray-600 hover:text-[#1ba8ca]"
                                onClick={scrollToServices}
                            >
                                Services
                            </Link>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <a
                                href="https://wa.me/6512345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#26D7FD] text-white px-4 py-2 rounded-lg hover:bg-[#1ba8ca] transition-colors flex items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                Chat with us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden`}
            >
                <div className="p-6">
                    <button
                        className="mb-8 text-gray-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="/"
                            className={`py-2 ${
                                pathname === "/"
                                    ? "text-[#93EBFE]"
                                    : "text-gray-600 "
                            } hover:text-[#93EBFE] }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`py-2 ${
                                pathname === "/about"
                                    ? "text-[#93EBFE]"
                                    : "text-gray-600 "
                            } hover:text-[#93EBFE] }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-600 py-2"
                            onClick={(e) => {
                                setIsMobileMenuOpen(false);
                                scrollToServices(e);
                            }}
                        >
                            Services
                        </Link>
                        <Link
                            href="https://wa.me/6512345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#26D7FD] text-white px-4 py-2 rounded-lg flex items-center w-fit"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                            Chat with us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
