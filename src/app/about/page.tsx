//@ts-nocheck
"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PersonalBio from "@/components/PersonalBio";
import Timeline from "@/components/Timeline";
import TitleCard from "@/components/TitleCard";
import { Card, CardBody, Typography } from "@material-tailwind/react";

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
