export type Project = {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    image?: string; // URL or path to  image in /public
    liveDemoUrl?: string;
    githubUrl?: string | { frontend: string; backend: string };

};

export const projects: Project[] = [
    {
        slug: 'coffee-shop',
        title: 'CoffeeShop E-Commerce Platform',
        description:
            ' Developed a complete, full-stack e-commerce application featuring a secure REST API backend built with Spring Boot and a responsive, interactive frontend built with React and TypeScript. Implemented a robust, stateless security system using Spring Security and JWTs with role-based access control. Designed for high performance using a Redis cache and ensured data integrity with optimistic locking to handle concurrent transactions. Deployed the containerized backend to Render and the frontend to Vercel.',
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
        image: '/images/coffeesiteimg.png',
        liveDemoUrl: 'https://www.coffees.dev',
        githubUrl: {
            frontend: 'https://github.com/rdin111/coffee-site-frontend',
            backend: 'https://github.com/rdin111/coffee-site-backend',
        },


    },
    {
        slug: 'real-time-kanban-board',
        title: 'Real-Time Collaborative Kanban Board',
        description: 'This project is a full-stack, real-time Kanban board called Flowboard, designed from the ground up for seamless workflow visualization and multi-user collaboration. Built on the MERN stack (MongoDB, Express, React, Node.js) with TypeScript, the application allows users to manage multiple project boards, lists, and cards with complete CRUD functionality. The core user experience is centered around a polished drag-and-drop interface (dnd-kit) for intuitively reordering both tasks and lists. Real-time synchronization is powered by a WebSocket (Socket.io) backend with a room-based architecture, ensuring that changes made by one user are instantly reflected for all others. To enhance productivity, the application integrates Google\'s Gemini AI via a secure backend proxy, allowing users to auto-generate entire task lists from a single natural language prompt. The entire application is deployed with a Node.js backend on Render and a responsive, themeable React frontend on Vercel.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind'],
        image: '/images/flowboardimg.png',
        liveDemoUrl: 'https://www.flowboard.me',
        githubUrl: {
            frontend: 'https://github.com/rdin111/flowboard-frontend',
            backend: 'https://github.com/rdin111/flowboard-backend',
        },


    },
    {
        slug: 'portfolio',
        title: 'Portfolio Website',
        description:
            'The site you’re viewing now, built from scratch with React, TypeScript, and Next.js 15. Fully responsive, dark/light mode support, icon libraries, and a modern component architecture using shadcn/ui.',
        tech: ['Next.js 15', 'React', 'TypeScript', 'shadcn/ui', 'Vercel'],
        githubUrl: 'https://github.com/rdin111/portfolio-site',
    }
];