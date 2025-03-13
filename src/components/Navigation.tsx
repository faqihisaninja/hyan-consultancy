"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Logo from "./Logo";

export default function Navigation() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                    <div className="hidden md:flex flex-1 justify-between items-center ml-8">
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
                            >
                                Services
                            </Link>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <Link
                                href="/contact"
                                className="text-gray-600 hover:text-[#1ba8ca]"
                            >
                                Contact
                            </Link>
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
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-600 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
