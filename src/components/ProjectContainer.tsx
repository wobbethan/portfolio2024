"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectList from "@/helpers/constants/projects";
import { Project } from "@/types/project";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const ProjectContainer = () => {
  return (
    <motion.div
      className="w-full mt-10 grid lg:grid-cols-3 flex flex-col justify-center items-center sm:grid-cols-2 gap-5"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {ProjectList.map((project: Project) => (
        <motion.div key={project.name} variants={item}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectContainer;
