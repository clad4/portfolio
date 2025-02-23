import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center sm:px-8 lg:px-2">
            <h1 className="mb-4 font-bold tracking-tighter text-4xl md:text-6xl lg:text-7xl ">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
                    Sovannroth Eang
                </span>
            </h1>
            <p className="my-8 max-w-[650px] text-sm md:text-lg text-muted-foreground sm:text-xl">
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
