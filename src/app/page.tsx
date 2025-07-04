import {Button} from  "@/components/ui/button";
import Link from "next/link";
import { ToolsUsed } from '@/components/shared/ToolsUsed';
import { Certificates } from '@/components/shared/Certificates';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { projects } from "@/lib/data";
import {HomePageContact} from "@/components/shared/HomePageContact";

export default function Home() {
    const featuredProjects = projects.slice(0, 3);
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section className="container mx-auto flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold ">
            Hi, I'm Rahul Dinesh
          </h1>
          <p className="text-sm text-muted-foreground">
            Computer Science student at UNC Charlotte · Graduating Fall 2025
          </p>

          <div className="max-w-xl text-lg text-muted-foreground md:text-xl space-y-4">
            <p>
                I'm a developer with experience building modern web applications across the frontend, backend, and
                infrastructure layers. I’m passionate about solving real-world problems through clean code, scalable systems,
                and thoughtful design.
            </p>
            <p>
                I’m focused on finishing my degree and seeking opportunities where I can contribute to
                impactful projects, learn from experienced engineers, and continue growing as a developer.
            </p>
          </div>
        </section>
        {/* Tech Stack Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Open To Roles Including:</h2>
          <p className="text-muted-foreground text-base">
              Frontend · Backend · APIs · Databases · DevOps · Cloud · Testing
          </p>
        </section>
        <section className="mt-16 text-center flex-row items-center justify-center mx-auto max-w-2xl	">
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <ToolsUsed  />
        </section>
          <section className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Certificates</h2>
              <Certificates />
          </section>
          <section className="container mx-auto mt-20 text-center">
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


          <div className="container mx-auto mt-20 text-center">
              <HomePageContact />
          </div>



      </main>
  );
}
