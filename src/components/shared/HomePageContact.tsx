// src/components/shared/HomePageContact.tsx
"use client"; // 1. This must be a Client Component to use state and browser APIs

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Check } from "lucide-react"; // 2. Import the Check icon

const socialProfiles = [
    {
        name: "GitHub",
        url: "https://github.com/your-username",
        icon: <Github className="h-5 w-5" />,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/your-username",
        icon: <Linkedin className="h-5 w-5" />,
    },
];

export function HomePageContact() {
    // 3. Add state to track the "copied" status
    const [copied, setCopied] = useState(false);

    const email = "rahuldc9@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        // Reset the "copied" state after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section id="contact-section" className="flex flex-col items-center gap-8 text-center">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Get In Touch</h2>
                <p className="max-w-md text-muted-foreground">
                    I&apos;m actively exploring full-time software engineering roles starting Fall 2025. If you&apos;re hiring, I’d be glad to discuss how I can contribute to your team.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {socialProfiles.map((profile) => (
                    <Button asChild key={profile.name} variant="outline" size="lg">
                        <a href={profile.url} target="_blank" rel="noopener noreferrer">
                            {profile.icon}
                            <span className="ml-2">{profile.name}</span>
                        </a>
                    </Button>
                ))}
            </div>

            {/* 4. The Button is now a real <button> with an onClick handler */}
            <Button size="lg" onClick={copyToClipboard}>
                {copied ? (
                    <>
                        <Check className="mr-2 h-5 w-5" /> Email Copied!
                    </>
                ) : (
                    <>
                        <Mail className="mr-2 h-5 w-5" /> Copy Email
                    </>
                )}
            </Button>
        </section>
    );
}