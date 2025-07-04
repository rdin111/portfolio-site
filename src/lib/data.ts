export type Project = {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    image: string; // URL or path to  image in /public
};

export const projects: Project[] = [
    {
        slug: 'coffee-shop',
        title: 'CoffeeShop E-Commerce Platform',
        description:
            'A full-stack e-commerce app with secure ordering, JWT authentication, product catalog management, and responsive UI built with React and Spring Boot.\n' +
            '\n',
        tech: [
            'Java',
            'Spring Boot',
            'PostgreSQL',
            'Redis',
            'Docker',
            'React',
            'Redux',
            'TanStack Query',
            'TypeScript',
        ],
        image: '/images/project-one.png',
    },
    {
        slug: 'real-time-kanban-board',
        title: 'Real-Time Collaborative Kanban Board',
        description: 'A full-stack, real-time Kanban board application. Features secure user authentication, enabling 10+ users to collaborate in real-time via WebSockets.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind'],
        image: '/images/real-time-kanban-board.png',
    },
    {
        slug: 'portfolio',
        title: 'Portfolio Website',
        description:
            'The site you’re viewing now, built from scratch with React, TypeScript, and Next.js 15. Fully responsive, dark/light mode support, icon libraries, and a modern component architecture using shadcn/ui.',
        tech: ['Next.js 15', 'React', 'TypeScript', 'shadcn/ui', 'Vercel'],
        image: '/images/project-three.png',
    }
];