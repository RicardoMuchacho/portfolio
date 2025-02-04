import ProjectCard from "./ui/ProjectCard";

export interface Project {
  title: string;
  description: string;
  url: string;
  src: string;
}

const projects: Project[] = [
  {
    title: "Restaurantly App",
    description: "Google Api recommendations based on text string",
    url: "https://github.com/RicardoMuchacho/restaurantly",
    src: "/restaurantlyImg.png"
  },
  {
    title: "WebGPU Background Remover",
    description: "WebGPU and hugginface model to remove background for portrait images",
    url: "https://github.com/RicardoMuchacho/webgpu-playground",
    src: "/webGpuImg.png"
  },
  {
    title: "University Projects",
    description: "Compilation of projects developed during my time at university",
    url: "https://github.com/stars/RicardoMuchacho/lists/web-app-projects",
    src: "/githubBg.jpg"
  },
]

export default function Projects() {
  return (
    <section className="flex flex-col justify-center px-12 py-12 items-center">
      <div className="flex flex-col gap-10 justify-center items-center w-full sm:flex-row">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            src={project.src}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
}
