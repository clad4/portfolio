import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/data";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
export default function Education() {
    return (
        <div className="py-8">
            <h3 className="mb-6 text-center text-2xl font-semibold tracking-tight text-foreground">
                Education
            </h3>
            <div className="relative mx-auto max-w-3xl">
                <div className="space-y-18 w-full flex items-center justify-center">
                    <Timeline
                        sx={{
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,

                                padding: 0,
                            },
                        }}
                    >
                        {education.map((edu, index) => {
                            const Icon = edu.icon;
                            return (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Card className="border bg-card text-card-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                                            <CardHeader>
                                                <div className="flex items-center gap-3 md:justify-end">
                                                    <Icon className="h-5 w-5 text-primary" />
                                                    <span className="text-sm font-medium text-muted-foreground">
                                                        {edu.duration}
                                                    </span>
                                                </div>
                                                <CardTitle className="text-foreground">
                                                    {edu.school}
                                                </CardTitle>
                                                <CardDescription className="text-muted text-sm">
                                                    {edu.degree}
                                                </CardDescription>
                                                <p className="text-base text-muted-foreground">
                                                    {edu.description}
                                                </p>
                                            </CardHeader>
                                        </Card>
                                    </TimelineContent>
                                </TimelineItem>
                            );
                        })}
                    </Timeline>
                </div>
            </div>
        </div>
    );
}
