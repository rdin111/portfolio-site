import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import Image from 'next/image';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: `${project.title} | Rahul Dinesh`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
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