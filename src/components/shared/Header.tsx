"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggleButton } from "./ThemeToggleButton";

export default function Header() {
    return (
        <div className="p-2 md:p-4">
            <header className="sticky top-2 md:top-4 z-50 w-full rounded-2xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-20 items-center justify-between px-4">
                    {/* LEFT: Name */}
                    <Link href="/" className="font-bold text-xl md:text-2xl">
                        Rahul Dinesh
                    </Link>

                    {/* CENTER: Desktop Navigation */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/projects"
                                            className={`${navigationMenuTriggerStyle()} text-base`}
                                        >
                                            Projects
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/#contact-section"
                                            className={`${navigationMenuTriggerStyle()} text-base`}
                                        >
                                            Contact
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* RIGHT: Desktop Theme Toggle */}
                    <div className="hidden md:block">
                        <ThemeToggleButton />
                    </div>

                    {/* MOBILE: Hamburger Menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle navigation</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-60">
                                <div className="flex flex-col gap-4 py-6">
                                    <Link href="/" className="font-bold text-lg">
                                        Rahul Dinesh
                                    </Link>
                                    <Link href="/projects" className="text-muted-foreground">
                                        Projects
                                    </Link>
                                    <Link href="/contact" className="text-muted-foreground">
                                        Contact
                                    </Link>
                                    <div className="pt-4">
                                        <ThemeToggleButton />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </div>
    );
}