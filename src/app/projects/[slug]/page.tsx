import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type ProjectPageProps = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: ProjectPageProps): Metadata {
    const { slug } = params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: `${project.title} | Rahul Dinesh`,
        description: project.description,
    };
}

//  need to export generateStaticParams for dynamic SSG to work
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}


export default function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="container mx-auto py-10">
            <section className="space-y-8">
                <h1 className="text-4xl font-bold">{project.title}</h1>

                {/* Conditionally render the image only if it exists */}
                {project.image && (
                    <div className="relative w-full h-96 overflow-hidden rounded-lg">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="flex flex-wrap gap-4">
                    {/* Conditionally render the Live Demo button */}
                    {project.liveDemoUrl && (
                        <Button asChild>
                            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Live Demo
                            </a>
                        </Button>
                    )}

                    {/* Handle single GitHub link */}
                    {typeof project.githubUrl === 'string' && (
                        <Button asChild variant="secondary">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                View on GitHub
                            </a>
                        </Button>
                    )}

                    {/* Handle separate Frontend/Backend links */}
                    {typeof project.githubUrl === 'object' && (
                        <>
                            <Button asChild variant="secondary">
                                <a href={project.githubUrl.frontend} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Frontend Repo
                                </a>
                            </Button>
                            <Button asChild variant="secondary">
                                <a href={project.githubUrl.backend} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Backend Repo
                                </a>
                            </Button>
                        </>
                    )}
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem) => (
                        <Badge key={techItem} variant="secondary">
                            {techItem}
                        </Badge>
                    ))}
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                    <p>{project.description}</p>
                </div>
            </section>
        </main>
    );
}