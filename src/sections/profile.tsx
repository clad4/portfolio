import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { skills } from "../../data/data";
import Education from "@/components/Education";

export default function Profile() {
    return (
        <div>
            <div className="text-center mb-10 relative">
                <h2 className="mb-8 marker text-3xl font-bold tracking-tighter sm:text-4xl">
                    About Me
                </h2>
            </div>
            <Card className="mt-12 p-8 bg-background relative">
                <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden ">
                        <div className="absolute w-full h-full border top-1 left-1"></div>
                        <Image
                            src="/images/image.png"
                            alt="Profile picture"
                            sizes="any"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <p className="text-muted-foreground uppercase tracking-wider font-medium">
                            Who am I?
                        </p>
                        <h3 className=" text-3xl lg:text-4xl font-bold tracking-tight gradient-text animate-gradient">
                            I&apos;m Sovannroth Eang,
                        </h3>
                        <p className="text-sm md:text-lg text-secondary-foreground leading-relaxed">
                            An{" "}
                            <span className="font-medium">
                                undergraduate computer science student
                            </span>{" "}
                            on a journey to become a proficient full-stack
                            developer. I&apos;m building my foundation in web
                            technologies, with a current focus on Next.js and
                            Node.js. I&apos;m a firm believer in continuous
                            learning and I&apos;m always looking for
                            opportunities to grow and improve my skills.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mt-8">
                            <div className="space-y-2">
                                <p className="text-muted-foreground">Email</p>
                                <p className="font-medium">
                                    eangsovannroth@gmail.com
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-muted-foreground">
                                    Location
                                </p>
                                <p className="font-medium">
                                    Phnom Penh, Cambodia
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-muted-foreground">
                                    Education
                                </p>
                                <p className="font-medium">
                                    B.S. Computer Science and Engineering
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-muted-foreground">
                                    Specialty
                                </p>
                                <p className="font-medium">
                                    Full-Stack Development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <Card key={index}>
                                <CardHeader>
                                    <Icon className="h-8 w-8 text-primary" />
                                    <CardTitle className="mt-4">
                                        {skill.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {skill.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </Card>
            <Education />
        </div>
    );
}
