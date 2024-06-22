import { cn } from "@/lib/utils";
import { FC } from "react";

interface TitleCardProps {
  title: string;
  className: string;
}

const TitleCard: FC<TitleCardProps> = ({ title, className }) => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div
        className={cn("h-[225px] w-full rounded-[20px] bg-cover", className)}
      >
        <div className="flex h-full flex-col items-center justify-center max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleCard;
