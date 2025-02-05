import ContentCard, { IContentCard } from "./ui/ContentCard";

const experiences: IContentCard[] = [
  {
    title: "Intern Front-End Developer - (2024)",
    description:
      "Worked at Media Markt supporting multiple web applications. Focused on React TypeScript and jest testing",
    url: "https://drive.google.com/file/d/1P3-prLomgCWASQLSY2ti4i11liM1TBUl/view?usp=sharing",
    src: "/mediaMarkLogo.png",
  },
  {
    title: "Full-Stack Developer (2022 -2024)",
    description:
      "Developed and maintained Node.js APIs and React TypeScript frontends at Binwus.",
    url: "https://drive.google.com/file/d/1P3-prLomgCWASQLSY2ti4i11liM1TBUl/view?usp=sharing",
    src: "/binwusLogo.png",
  }
];


export default function Experience() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full sm:flex-row sm">
      {experiences.map((exp) => (
        <ContentCard
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
