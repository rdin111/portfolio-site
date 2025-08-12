import Image from "next/image";

const certificateData = [
    {
        name: "AWS Certified Cloud Practitioner",
        imageUrl:
            "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/twitter_thumb_201604_image.png",
        verifyUrl:
            "https://www.credly.com/badges/2a1fd2a8-604a-44e3-9b37-15f8e73d9204",
        description:
            "Demonstrates foundational cloud knowledge including core AWS services, architecture, and security.",
    },
    {
        name: "AWS Certified AI Practitioner",
        imageUrl:
            "https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
        verifyUrl:
            "https://www.credly.com/badges/00dcc4b7-fffc-4ba2-a6bb-dcbe0adf6743",
        description:
            "Validates foundational understanding of artificial intelligence and machine learning concepts, AWS AI/ML services, and responsible AI practices.",
    }

];

export function Certificates() {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {certificateData.map((cert) => (
                <a
                    key={cert.name}
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group h-full"
                >
                    <div className="h-full p-6 rounded-lg transition-all duration-300 group-hover:bg-accent group-hover:-translate-y-1 text-center">
                        <div className="relative w-32 h-32 mb-4 mx-auto">
                            <Image
                                src={cert.imageUrl}
                                alt={`${cert.name} badge`}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2 w-xl mx-auto">
                            <h3 className="text-base font-medium text-foreground">
                                {cert.name}
                            </h3>
                            <p className="text-xs  text-muted-foreground break-normal">
                                {cert.description}
                            </p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}