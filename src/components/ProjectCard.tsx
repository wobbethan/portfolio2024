"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Project } from "@/types/project";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface CardProps {
  project: Project;
}
const ProjectCard = ({ project }: CardProps) => {
  const router = useRouter();
  return (
    <Card className="w-[300px] h-[400px] shadow-md flex flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle
            className="cursor-pointer  flex flex-row justify-between text-start"
            onClick={() => router.push(`/projects/${project.link}`)}
          >
            <div className="flex flex-col gap-1">
              <h1 className="hover:underline">{project.name}</h1>
              <HoverCard>
                <HoverCardTrigger className="hover:underline cursor-pointer text-zinc-400-400 text-[15px] font-normal">
                  {project.affiliation.name}
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src={project.affiliation.image} />
                      <AvatarFallback>Avatar</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">
                        {project.affiliation.name}
                      </h4>
                      <p className="text-sm font-normal">
                        {project.affiliation.description}
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <Avatar>
              <AvatarImage src={project.image} />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="line-clamp-4">
          {project?.description}
        </CardContent>
      </div>
      <CardFooter className="w-full flex flex-col gap-6">
        <div className="w-full">
          {project.stack.map((tech) => (
            <Badge key={tech.name} className={`mx-1 text-white ${tech.color}`}>
              {tech.name}
            </Badge>
          ))}
        </div>
        <div className="flex w-full justify-end">
          <ArrowRight
            className="cursor-pointer hover:bg-gray-200 rounded-md"
            onClick={() => router.push(`/projects/${project.link}`)}
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
