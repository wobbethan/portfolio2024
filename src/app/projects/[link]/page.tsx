import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";
import ProjectList from "@/helpers/constants/projects";
import { Project } from "@/types/project";
import { Github, MonitorSmartphone } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: {
    link: string;
  };
}

const page: FC<pageProps> = ({ params }) => {
  const { link } = params;
  if (!link || typeof link !== "string") return notFound();

  const project = ProjectList.find((proj) => proj.link === link);

  if (!project) return notFound();

  return (
    <MaxWidthWrapper className="flex flex-col gap-2 items-center">
      <div className="flex flex-col items-center mb-5 gap">
        <Image
          src={project.image}
          alt="Project Image"
          width={200}
          height={200}
          className="rounded-full object-cover mt-10"
        />
        <h1 className="w-full my-5 text-center md:text-6xl text-5xl font-semibold">
          {project.name}
        </h1>
        <div className="w-full flex flex-wrap items-center justify-center gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech.name} className={` text-white ${tech.color}`}>
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <p className="text-2xl text-wrap my-8 text-center">
          {project.description}
        </p>
        <div className="w-full flex flex-wrap items-center justify-center gap-5">
          <Card className="flex items-center justify-center hover:bg-accent hover:text-accent-foreground text-center shadow-md">
            <LinkPreview url={project.repo!}>
              <CardHeader>
                <CardTitle className="text-md flex flex-row justify-center items-center gap-3 text-lg">
                  GitHub Repository
                  <Github size={25} />
                </CardTitle>
              </CardHeader>
            </LinkPreview>
          </Card>
          {project.deploy && (
            <Card className="flex items-center justify-center hover:bg-accent hover:text-accent-foreground text-center shadow-md">
              <LinkPreview url={project.deploy!}>
                <CardHeader>
                  <CardTitle className="text-md flex flex-row justify-center items-center gap-3 text-lg">
                    Deployed website
                    <MonitorSmartphone size={25} />
                  </CardTitle>
                </CardHeader>
              </LinkPreview>
            </Card>
          )}
        </div>
      </div>
      {project.projects && <RelatedProjects project={project} />}
    </MaxWidthWrapper>
  );
};

export default page;

interface relatedProjectsProps {
  project: Project;
}

const RelatedProjects: FC<relatedProjectsProps> = ({ project }) => {
  if (!project) return notFound();
  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-3xl font-bold">Related Projects</h1>
      <div className="flex flex-wrap gap-8 my-5 flex-row  justify-center">
        {project.projects?.map((relatedProj) => {
          const retrievedProj = ProjectList.find(
            (proj) => proj.link === relatedProj
          );
          if (!retrievedProj) return notFound();
          return (
            <ProjectCard key={retrievedProj?.name} project={retrievedProj} />
          );
        })}
      </div>
    </div>
  );
};
