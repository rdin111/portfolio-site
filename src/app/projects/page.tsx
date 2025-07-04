import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/shared/ProjectCard';

const ProjectsPage = () => {
    return (
        <main className="container mx-auto py-10">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold">My Projects</h1>
                <p className="mt-4 text-muted-foreground">
                    Here is a collection of my work.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </section>
        </main>
    );
};

export default ProjectsPage;
