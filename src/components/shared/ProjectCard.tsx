import Link from 'next/link';
import { ExternalLink } from 'lucide-react'; // 1. Import the icon
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { type Project } from '@/lib/data';

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        // 2. Added 'group' to enable hover effects on child elements
        <Link href={`/projects/${project.slug}`} className="block group h-full">
            <Card className="hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                {/* 3. This structure pushes the content to the bottom */}
                <CardContent className="flex-grow flex flex-col justify-end">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((techItem) => (
                                <Badge key={techItem} variant="secondary">
                                    {techItem}
                                </Badge>
                            ))}
                        </div>
                        {/* 4. The icon appears on hover */}
                        <ExternalLink className="h-4 w-4 text-muted-foreground transition-opacity opacity-0 group-hover:opacity-100" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}