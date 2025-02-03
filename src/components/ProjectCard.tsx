interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <article className="overflow-hidden self-stretch pb-6 my-auto bg-white rounded-md border border-solid border-zinc-100 min-w-60 shadow-[2px_4px_7px_rgba(0,0,0,0.25)] w-[379px]">
      <div className="flex shrink-0 max-w-full bg-zinc-100 h-[189px] w-[378px]" />
      <div className="flex flex-col items-start pr-10 pl-6 mt-4 max-md:px-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2.5 text-base">{description}</p>
      </div>
    </article>
  );
}
