import Consultant from "@/components/Consultant";
import Breadcrumb from "@/components/Breadcrumb";

export default function Consultants() {
    // Consultant data - replace with actual consultant information
    const consultants = [
        {
            name: "Helmi Ali",
            image: "/consultant-placeholder-1.jpg", // Using the same image names from the about page
            phone: "+65 1234 5678",
            email: "helmi@hyanconsulting.com",
            linkedIn: "https://linkedin.com/in/helmi-ali",
            registrationNumber: "REG12345",
            licenseNumber: "LIC98765",
            biography:
                "A well-experienced specialist legal recruiter, Helmi is Co-Founder at Hyan Consulting. He started in legal recruitment in 2011 at a leading regional legal recruitment agency. Since then, he has started and led recruitment teams in Singapore and Malaysia. Helmi oversees overall business management at Hyan Consulting and specializes in senior placements for Legal, Compliance and Corporate Secretarial positions. Helmi holds a Bachelor's degree in Communication Studies (Hons) from Wee Kim Wee School of Communication and Information at Nanyang Technological University. Prior to being a recruiter, Helmi worked in the media industry as a producer and director. His works have been shown on Channel News Asia, BBC, Suria and also premiered at the Singapore International Film Festival. Outside of work, Helmi regularly volunteers for a food bank and he is an appointed core team member of the Yayasan Mendaki Professional Network for Human Resource which seeks to uplift the standards of HR professionals. Helmi is also an avid field hockey player.",
        },
        {
            name: "Kate Chang",
            image: "/consultant-placeholder-2.jpg", // Using the same image names from the about page
            phone: "+65 8765 4321",
            email: "kate@hyanconsulting.com",
            linkedIn: "https://linkedin.com/in/kate-chang",
            registrationNumber: "REG67890",
            licenseNumber: "LIC12345",
            biography:
                "Kate is a Co-Founder at Hyan Consulting. With more than a decade of industry experience, Kate is a distinguished legal recruiter recognised for her unmatched expertise. She started her recruitment career in 2013 at a leading regional recruitment agency. Kate focuses on roles in legal, financial compliance, anti-bribery compliance, data privacy and protection, governance, and risk. Kate holds a Bachelor's degree in Engineering (Material Science & Engineering) from Nanyang Technological University. In her free time, she volunteers at a food bank and enjoys staying active through workouts at the gym and pilates.",
        },
    ];

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
