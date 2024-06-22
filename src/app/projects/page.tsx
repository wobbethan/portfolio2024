import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectContainer from "../../components/ProjectContainer";
import TitleCard from "../../components/TitleCard";

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center my-10">
        <TitleCard title="Projects" className="bg-projects" />

        <ProjectContainer />
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
