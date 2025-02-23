"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import Profile from "../sections/profile";
import Contact from "../sections/contact";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";

export default function Portfolio() {
    const [isDark, setIsDark] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll("section[id]").forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const toggleDark = () => {
        const newDark = !isDark;
        setIsDark(newDark);

        if (newDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const NavLinks = () => (
        <>
            <a
                href="#home"
                className={`text-lg font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === "home"
                        ? "text-primary"
                        : "text-muted-foreground"
                }`}
            >
                Home
            </a>
            <a
                href="#projects"
                className={`text-lg font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === "projects"
                        ? "text-primary"
                        : "text-muted-foreground"
                }`}
            >
                Projects
            </a>
            <a
                href="#profile"
                className={`text-lg font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === "profile"
                        ? "text-primary"
                        : "text-muted-foreground"
                }`}
            >
                Profile
            </a>
            <a
                href="#contact"
                className={`text-lg font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === "contact"
                        ? "text-primary"
                        : "text-muted-foreground"
                }`}
            >
                Contact
            </a>
        </>
    );
    const technologies = [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Vercel", icon: SiVercel },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted transition-colors duration-300">
            <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
                <div className="container flex h-16 items-center justify-between">
                    <nav className="hidden gap-6 md:flex [&>*:hover]:bg-slate-300">
                        <NavLinks />
                    </nav>
                    <Button variant="ghost" size="icon" onClick={toggleDark}>
                        {isDark ? (
                            <Sun className="size-5 " />
                        ) : (
                            <Moon className="size-5 " />
                        )}
                    </Button>
                </div>
            </header>
            <main className="container pb-16 pt-24">
                <section id="home" className="py-12">
                    <Hero isDark={isDark} />
                </section>
                <section id="projects" className="py-12">
                    <Projects />
                </section>
                <section id="profile" className="py-12">
                    <Profile />
                </section>
                <section id="contact" className="py-12">
                    <Contact />
                </section>
            </main>
            <footer className="mt-5 bg-accent">
                <div className="container py-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Sovannroth Eang. All
                            rights reserved.
                        </p>

                        <div className="flex flex-col items-center gap-4 md:flex-row">
                            <p className="text-sm text-muted-foreground">
                                Built with:
                            </p>
                            <div className="flex gap-3">
                                {technologies.map((tech) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div
                                            key={tech.name}
                                            className="group relative flex items-center justify-center"
                                        >
                                            <Icon className="h-5 w-5 transition-colors group-hover:text-primary" />
                                            <span className="absolute -top-8 scale-0 rounded bg-slate-800 px-2 py-1 text-xs text-slate-200 transition-transform group-hover:scale-100">
                                                {tech.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
