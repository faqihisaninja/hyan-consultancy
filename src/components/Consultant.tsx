import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

interface ConsultantProps {
    name: string;
    image: string;
    phone: string;
    email: string;
    linkedIn: string;
    registrationNumber: string;
    licenseNumber: string;
    biography: string;
}

export default function Consultant({
    name,
    image,
    phone,
    email,
    linkedIn,
    registrationNumber,
    licenseNumber,
    biography,
}: ConsultantProps) {
    return (
        <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Headshot */}
                <div className="w-full md:w-1/3">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                        <Image
                            src={image}
                            alt={`${name} - Director at Hyan Consulting`}
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                        {name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">Director</p>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                            <FaPhone className="text-gray-600" />
                            <span className="text-gray-700">{phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-gray-600" />
                            <Link
                                href={`mailto:${email}`}
                                className="text-blue-600 hover:underline"
                            >
                                {email}
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaLinkedin className="text-gray-600" />
                            <Link
                                href={linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                LinkedIn Profile
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-sm text-gray-500">
                                Registration Number
                            </p>
                            <p className="font-medium">{registrationNumber}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-sm text-gray-500">
                                License Number
                            </p>
                            <p className="font-medium">{licenseNumber}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Biography */}
            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">
                    {name}, Director
                </h3>
                <p className="text-gray-700 leading-relaxed">{biography}</p>
            </div>
        </div>
    );
}
