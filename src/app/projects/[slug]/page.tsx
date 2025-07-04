// src/app/projects/[slug]/page.tsx

import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { type Metadata } from 'next';
import Image from 'next/image';

// 1. Define the props type correctly.
type Props = {
    params: { slug: string };
};

// 2. Use the 'Props' type for generateMetadata.
export function generateMetadata({ params }: Props): Metadata {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    // Remember to replace 'Your Name' here
    return {
        title: `${project.title} | Rahul Dinesh`,
        description: project.description,
    };
}

// This function correctly pre-builds the static pages.
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// 3. Use the 'Props' type for the page component.
export default function ProjectPage({ params }: Props) {
    const { slug } = params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="container mx-auto py-10">
            <section className="space-y-8">
                <h1 className="text-4xl font-bold">{project.title}</h1>

                <div className="relative w-full h-96 overflow-hidden rounded-lg">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem) => (
                        <Badge key={techItem} variant="secondary">
                            {techItem}
                        </Badge>
                    ))}
                </div>
                <p className="text-lg text-muted-foreground">{project.description}</p>
            </section>
        </main>
    );
}