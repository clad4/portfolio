import { Button } from "@/components/ui/button";

interface HeroProps {
    isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center sm:px-8 lg:px-2">
            <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {isDark ? (
                    <span className="text-slate-400 sm:text-5xl md:text-6xl lg:text-7xl">
                        Hi
                    </span>
                ) : (
                    <span className="text-slate-500 sm:text-5xl md:text-6xl lg:text-7xl">
                        Hi
                    </span>
                )}
                , I&apos;m <span className="text-primary">Sovannroth Eang</span>
            </h1>
            <p className="mb-8 max-w-[650px] text-lg text-muted-foreground sm:text-xl">
                A passionate full-stack developer specializing in React,
                Node.js, and C#, with a focus on creating user-friendly and
                performant web applications.
            </p>
            <div className="flex gap-4">
                <Button size="lg" asChild>
                    <a href="#contact">Get in touch</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <a href="#projects">View my work</a>
                </Button>
            </div>
        </div>
    );
}
