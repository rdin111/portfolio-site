// src/app/projects/[slug]/page.tsx

import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { type Metadata } from 'next';
import Image from 'next/image'; // 1. Import the Image component

type ProjectPageProps = {
    params: {
        slug: string;
    };
};

// 2. This function generates dynamic metadata for the page
export function generateMetadata({ params }: ProjectPageProps): Metadata {
    const { slug } = params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Your Name`,
        description: project.description,
    };
}

// This function tells Next.js which slugs to pre-render
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}


const ProjectPage = ({ params }: ProjectPageProps) => {
    const { slug } = params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="container mx-auto py-10">
            <section className="space-y-8">
                <h1 className="text-4xl font-bold">{project.title}</h1>

                {/* 3. Add the Next.js Image component */}
                <div className="relative w-full h-96 overflow-hidden rounded-lg">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority // Helps load this important image faster
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
};

export default ProjectPage;