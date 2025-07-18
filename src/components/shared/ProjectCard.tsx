import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { type Project } from '@/lib/data';
import { Button } from '@/components/ui/button';

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-10">
                    {project.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem) => (
                        <Badge key={techItem} variant="secondary">
                            {techItem}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex gap-4">
                <Button asChild>
                    <Link href={`/projects/${project.slug}`}>View Details</Link>
                </Button>

                {project.liveDemoUrl && (
                    <Button asChild variant="secondary">
                        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}