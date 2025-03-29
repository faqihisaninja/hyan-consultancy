"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Consultant from "@/components/Consultant";
import { consultants } from "@/app/stores/consultants";
import { useEffect } from "react";

export default function Consultants() {
    useEffect(() => {
        // Check if we need to scroll to a consultant
        const consultantId = localStorage.getItem("scrollToConsultant");
        if (consultantId) {
            // Clear the stored value
            localStorage.removeItem("scrollToConsultant");

            // Find the element and scroll to it
            const element = document.getElementById(consultantId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <main className="bg-[#F8FBFB]">
            <section className="py-16 px-4 md:px-8">
                <div className="container max-w-6xl mx-auto">
                    <Breadcrumb
                        items={[
                            { label: "About Us", href: "/about" },
                            { label: "Our Consultants", href: "/consultants" },
                        ]}
                    />

                    <h1 className="text-4xl font-bold text-gray-800 mb-12">
                        Our Consultants
                    </h1>

                    <div className="space-y-16">
                        {consultants.map((consultant, index) => (
                            <Consultant key={index} {...consultant} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
