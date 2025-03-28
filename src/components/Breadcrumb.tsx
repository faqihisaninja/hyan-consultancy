import Link from "next/link";

type BreadcrumbItem = {
    label: string;
    href: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-[#00838F]"
                    >
                        Home
                    </Link>
                    <svg
                        className="w-3 h-3 mx-2 fill-current text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                    </svg>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="inline-flex items-center">
                        <Link
                            href={item.href}
                            className="text-gray-600 hover:text-[#00838F]"
                        >
                            {item.label}
                        </Link>
                        {index < items.length - 1 && (
                            <svg
                                className="w-3 h-3 mx-2 fill-current text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                            </svg>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
