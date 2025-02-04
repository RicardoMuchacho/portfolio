import ProjectCard from "./ui/ProjectCard";

export interface Experience {
  title: string;
  description: string;
  url: string;
  src: string;
}

const experiences: Experience[] = [
  {
    title: "test",
    description: "test test",
    url: "https://github.com/stars/RicardoMuchacho/lists/web-app-projects",
    src: "/githubBg.jpg"
  },
  {
    title: "test",
    description: "test test",
    url: "https://github.com/stars/RicardoMuchacho/lists/web-app-projects",
    src: "/githubBg.jpg"
  },
  {
    title: "University Projects",
    description: "Compilation of projects developed during my time at university",
    url: "https://github.com/stars/RicardoMuchacho/lists/web-app-projects",
    src: "/githubBg.jpg"
  },
]

export default function Experience() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full sm:flex-row sm">
      {experiences.map((exp) => (
        <ProjectCard
          key={exp.title}
          title={exp.title}
          description={exp.description}
          src={exp.src}
          url={exp.url}
        />
      ))}
    </div>
  );
}
