interface BiographyProps {
    paragraphs: string[];
}

export default function Biography({ paragraphs }: BiographyProps) {
    return (
        <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                </p>
            ))}
        </div>
    );
}
