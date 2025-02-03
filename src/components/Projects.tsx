import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="flex overflow-hidden relative flex-col items-start w-full min-h-[421px] max-md:max-w-full">
      <div className="z-0 self-stretch w-full min-h-0 border-solid border-[3px] border-zinc-100 max-md:max-w-full" />
      <h2 className="absolute left-2/4 z-0 h-11 text-3xl -translate-x-2/4 top-[26px] translate-y-[0%] w-[129px]">
        Projects
      </h2>
      <div className="flex overflow-hidden absolute left-2/4 z-0 flex-wrap gap-10 justify-center items-center px-16 -translate-x-2/4 bottom-[43px] h-[300px] min-h-[300px] translate-y-[0%] w-[1440px] max-md:px-5 max-md:max-w-full">
        <ProjectCard
          title="Lorem ipsilum"
          description="Lorem ipsilum Lorem ipsilum Lorem"
        />
        <ProjectCard
          title="Lorem ipsilum"
          description="Lorem ipsilum Lorem ipsilum Lorem"
        />
        <ProjectCard
          title="Lorem ipsilum"
          description="Lorem ipsilum Lorem ipsilum Lorem"
        />
      </div>
    </section>
  );
}
