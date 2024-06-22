"use client";
import { Project } from "@/types/project";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";

const ProjectCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-[300px]" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-[100px]" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        {" "}
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-4 w-[350px]" />
      </CardContent>
      <CardFooter>
        <Skeleton className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-[60px] min-h-[22px] mx-1" />
        <Skeleton className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-[60px] min-h-[22px] mx-1" />
        <Skeleton className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-[60px] min-h-[22px] mx-1" />
        <Skeleton className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-[60px] min-h-[22px] mx-1" />
        <Skeleton className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-[60px] min-h-[22px] mx-1" />
        <Skeleton className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-[60px] min-h-[22px] mx-1" />
      </CardFooter>
    </Card>
  );
};

export default ProjectCardSkeleton;
