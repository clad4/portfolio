import { Code2, Layout, LucideIcon, Server, School } from "lucide-react";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";

interface Project {
    image: string;
    title: string;
    description: string;
}
interface Skill {
    title: string;
    description: string;
    icon: LucideIcon;
}

const projects: Project[] = [
    {
        title: "Project One",
        description: "A beautiful web application built with React and Next.js",
        image: "/images/placeholder.svg",
    },
    {
        title: "Project Two",
        description: "An e-commerce platform with modern design",
        image: "/images/placeholder.svg",
    },
    {
        title: "Project Three",
        description: "A mobile-first social media dashboard",
        image: "/images/placeholder.svg",
    },
];
const skills = [
    {
        title: "Frontend Development",
        description: "React, Next.js, TailwindCSS",
        icon: Layout,
    },
    {
        title: "Backend Development",
        description: "Node.js, Express, MySQL",
        icon: Server,
    },
    {
        title: "Programming Languages",
        description: "JavaScript, TypeScript, C#",
        icon: Code2,
    },
];
const technologies = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Vercel", icon: SiVercel },
];

const education = [
    {
        school: "Royal University of Phnom Penh",
        degree: "B.S in Computer Science and Engineering",
        duration: "2023 - Present",
        description:
            "Bachelor of Science in Computer Science and Engineering (2023 - Present). Building expertise in web and application development, essential for full-stack development roles. Developing skills in front-end frameworks like Next.js, back-end technologies like Node.js, and database management.",
        icon: School,
    },
];

export { projects, skills, technologies, education };
