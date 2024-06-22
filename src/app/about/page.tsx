//@ts-nocheck
"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Timeline from "@/components/Timeline";
import TitleCard from "@/components/TitleCard";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { StickyScroll } from "../../components/ui/StickyScroll";
import Image from "next/image";
import PersonalBio from "@/components/PersonalBio";
import ProBio from "../../components/ProBio";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center my-10">
        <TitleCard title="About" className="bg-about" />
        <Card className="mt-8 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Professional Timeline
            </Typography>
            <Typography>
              View a timeline of Ethan&apos;s notable moments during his college
              career
            </Typography>
          </CardBody>
        </Card>
        <Timeline />
        <TitleCard title="Personal" className="bg-about my-10" />
        <PersonalBio />
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
