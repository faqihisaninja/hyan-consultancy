import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    weight: ["500", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Hyan Consultancy - HR Solutions",
    description:
        "Expert HR consultancy services tailored to your business needs",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${poppins.variable}`}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
