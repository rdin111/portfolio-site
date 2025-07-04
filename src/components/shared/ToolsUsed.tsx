import { Badge } from "@/components/ui/badge";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiRedux,
    SiSpring,
    SiNodedotjs,
    SiDocker,
    SiPostgresql,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaAws } from "react-icons/fa";

const categorizedTools = {
    "Frontend": [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Redux", icon: <SiRedux /> },
    ],
    "Backend": [
        { name: "Java", icon: <DiJava /> },
        { name: "Spring Boot", icon: <SiSpring /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
    ],
    "DevOps/Infra": [
        { name: "Docker", icon: <SiDocker /> },
        { name: "AWS", icon: <FaAws /> },
    ],
    "Database": [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
};

export function ToolsUsed() {
    return (
        // 1. This is now a container for our vertical rows
        <div className="w-full space-y-8">
            {Object.entries(categorizedTools).map(([category, tools]) => (
                // 2. Each category is a responsive flex row
                <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <h3 className="w-full sm:w-[140px] text-left sm:text-right font-semibold text-muted-foreground pt-1 shrink-0">
                        {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {tools.map((tool) => (
                            <Badge
                                key={tool.name}
                                variant="secondary"
                                className="flex items-center gap-2 py-1.5 px-3 text-sm"
                            >
                                <span className="h-4 w-4 text-foreground/80">{tool.icon}</span>
                                <span>{tool.name}</span>
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}