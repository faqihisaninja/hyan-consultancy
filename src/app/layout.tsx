import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    weight: ["500", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

// Load Dream-Avenue font
const dreamAvenue = localFont({
    src: "../fonts/Dream-Avenue.woff2", // Adjust the path as needed
    variable: "--font-dream-avenue",
    display: "swap",
});

// Load Quicksand Bold font
const quicksandBold = localFont({
    src: "../fonts/Quicksand-Bold.woff2", // Adjust the path as needed
    variable: "--font-quicksand-bold",
    display: "swap",
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
            <body
                className={`${inter.className} ${poppins.variable} ${dreamAvenue.variable} ${quicksandBold.variable}`}
            >
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
