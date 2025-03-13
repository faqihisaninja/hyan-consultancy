import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center">
            <Image
                src="/hyan-logo-full.png"
                alt="Hyan Logo"
                width={100}
                height={50}
                priority
            />
        </div>
    );
}
