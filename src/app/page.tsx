import {Button} from  "@/components/ui/button";
import Link from "next/link";
import { ToolsUsed } from '@/components/shared/ToolsUsed';
import { Certificates } from '@/components/shared/Certificates';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { projects } from "@/lib/data";
import {HomePageContact} from "@/components/shared/HomePageContact";
import TextType from "@/blocks/TextAnimations/TextType/TextType";



export default function Home() {
    const featuredProjects = projects.slice(0, 3);
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-20">
            <section className="container mx-auto flex flex-col items-center justify-center gap-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold">
                    Hi, I&apos;m{" "}
                    <span className="text-blue-500">
                    <TextType
                    text={[
                "Rahul Dinesh",
                "a Software Engineer",
                "a College Senior Student",
                "a Lifelong Learner",
                        ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                    />
                    </span>
                </h1>
                <p className="text-sm text-muted-foreground">
                    Computer Science student at UNC Charlotte · Graduating Fall 2025
                </p>
                <div className="max-w-xl text-lg text-muted-foreground md:text-xl space-y-4">
                    <p>
                        I&apos;m a developer with experience building modern web applications across the frontend, backend, and
                        infrastructure layers. I’m passionate about solving real-world problems through clean code, scalable systems,
                        and thoughtful design.
                    </p>
                    <p>
                        I’m focused on finishing my degree and seeking opportunities where I can contribute to
                        impactful projects, learn from experienced engineers, and continue growing as a developer.
                    </p>
                </div>
            </section>

            <section className="container mx-auto mt-24 text-center">
                <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
                <div className="max-w-3xl mx-auto">
                    <ToolsUsed />
                </div>
            </section>

            <section className="container mx-auto mt-24 text-center">
                <h2 className="text-3xl font-bold mb-8">Certificates</h2>
                <Certificates />
            </section>

            <section className="container mx-auto mt-24 text-center">
                <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
                <div className="mt-12">
                    <Button asChild size="lg" className="text-base">
                        <Link href="/projects">
                            View All Projects
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>

            <div className="container mx-auto mt-24 text-center">
                <HomePageContact />
            </div>
        </main>
    );
}