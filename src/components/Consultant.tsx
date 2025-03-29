import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

import Biography from "@/components/Biography";

interface ConsultantProps {
    name: string;
    title: string;
    id: string;
    image: string;
    phone: string;
    email: string;
    linkedIn: string;
    registrationNumber: string;
    licenseNumber: string;
    biography: string[];
}

export default function Consultant({
    name,
    title,
    id,
    image,
    phone,
    email,
    linkedIn,
    registrationNumber,
    licenseNumber,
    biography,
}: ConsultantProps) {
    return (
        <div id={id} className="mb-16">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Headshot */}
                <div className="w-full md:w-1/3">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                        <Image
                            src={image}
                            alt={`${name} - Director at Hyan Consulting`}
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "50% 10%",
                            }}
                            priority
                        />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="w-full md:w-2/3 bg-[#00838F] rounded-lg p-7 shadow-md flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-white mb-2">
                        {name}
                    </h2>
                    <p className="text-lg text-white mb-4">{title}</p>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                            <FaPhone className="text-white" />
                            <span className="text-white">{phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-white" />
                            <Link
                                href={`mailto:${email}`}
                                className="text-white hover:underline flex items-center gap-1"
                            >
                                {email}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaLinkedin className="text-white" />
                            <Link
                                href={linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:underline flex items-center gap-1"
                            >
                                LinkedIn
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white bg-opacity-10 p-4 rounded">
                            <p className="text-sm text-white text-opacity-80">
                                Registration Number
                            </p>
                            <p className="font-medium text-white">
                                {registrationNumber}
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-10 p-4 rounded">
                            <p className="text-sm text-white text-opacity-80">
                                License Number
                            </p>
                            <p className="font-medium text-white">
                                {licenseNumber}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Biography */}
            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
                    {name}, {title}
                </h3>
                <Biography paragraphs={biography} />
            </div>
        </div>
    );
}
