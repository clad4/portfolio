"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import Profile from "../sections/profile";
import Contact from "../sections/contact";
import NavLinks from "@/components/NavLinks";
import Footer from "@/components/Footer";

export default function Page() {
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

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted transition-colors duration-300">
            <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
                <div className="container px-4 md:px-8 flex h-16 items-center justify-between">
                    <nav className="flex gap-1 [&>*]:text-sm md:gap-6 md:[&>*]:text-lg [&>*:hover]:bg-muted ">
                        <NavLinks activeSection={activeSection} />
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
            <Footer />
        </div>
    );
}
