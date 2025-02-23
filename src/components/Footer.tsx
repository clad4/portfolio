import { technologies } from "data/data";

export default function Footer() {
    return (
        <footer className="mt-5 bg-accent">
            <div className="container py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Sovannroth Eang. All rights
                        reserved.
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
    );
}
