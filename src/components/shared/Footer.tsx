// src/components/shared/Footer.tsx

import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full border-t border-border/40 mt-20">
            <div className="container mx-auto flex h-20 items-center justify-center-safe">
                <p className="text-sm text-muted-foreground">
                    &copy; {currentYear} Rahul Dinesh. Built with Next.js
                </p>
                <div className="flex items-center gap-2">
                    <Button asChild variant="ghost" size="icon">
                        <a href="https://github.com/rdin111" target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                        </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                        <a href="https://www.linkedin.com/in/rahul-dinesh1" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </footer>
    );
}