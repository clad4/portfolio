import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { projects } from "../../data/data";

export default function Projects() {
    return (
        <div>
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
                My Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.length > 0 ? (
                    projects.map((projects, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardContent className="p-0">
                                <Image
                                    src={
                                        projects.image ||
                                        "/images/placeholder.svg"
                                    }
                                    alt={projects.title}
                                    width={600}
                                    height={400}
                                    className="aspect-video object-cover"
                                />
                            </CardContent>
                            <CardHeader>
                                <CardTitle>{projects.title}</CardTitle>
                                <CardDescription>
                                    {projects.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                ) : (
                    <Card className="overflow-hidden sm:col-span-2 lg:col-span-3 h-[200px] flex items-center justify-center">
                        <CardHeader>
                            <CardTitle className="p-4 font-bold sm:text-2xl lg:text-6xl ">
                                404
                            </CardTitle>
                        </CardHeader>
                    </Card>
                )}
            </div>
        </div>
    );
}
