import { Affiliation } from "./affiliation";
import { Stack } from "./stack";

export type Project = {
  image: string;
  name: string;
  affiliation: Affiliation;
  description: string;
  stack: Stack[];
  link: string;
  projects?: string[];
  deploy?: string;
  repo?: string;
};
