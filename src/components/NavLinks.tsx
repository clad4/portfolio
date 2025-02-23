interface NavProp {
    activeSection: string;
}

export default function NavLinks({ activeSection }: NavProp) {
    return (
        <>
            <a
                href="#home"
                className={` font-medium p-2 rounded transition-colors duration-200 hover:text-primary ${
                    activeSection === "home"
                        ? "text-primary"
                        : "text-muted-foreground"
                }`}
            >
                Home
            </a>
            <a
                href="#projects"
                className={` font-medium p-2 rounded transition-colors duration-200 hover:text-primary ${
                    activeSection === "projects"
                        ? "text-primary"
                        : "text-muted-foreground"
                }`}
            >
                Projects
            </a>
            <a
                href="#profile"
                className={` font-medium p-2 rounded transition-colors duration-200 hover:text-primary ${
                    activeSection === "profile"
                        ? "text-primary"
                        : "text-muted-foreground"
                }`}
            >
                Profile
            </a>
            <a
                href="#contact"
                className={` font-medium p-2 rounded transition-colors duration-200 hover:text-primary ${
                    activeSection === "contact"
                        ? "text-primary"
                        : "text-muted-foreground"
                }`}
            >
                Contact
            </a>
        </>
    );
}
