import ContentCard, { IContentCard } from "./ui/ContentCard";

const experiences: IContentCard[] = [
  {
    title: "Computer Enginner (URU)",
    description: "4 years bachelor degree in computer engineering",
    src: "/uruLogo.png"
  },
  {
    title: "Master Big Data & Analytics (EAE)",
    description: "1 year masters degree in big data and analytics",
    src: "/eaeLogo.jpg"
  },
  {
    title: "Certifications",
    description: "Compilation of certifications throughout my carrer",
    src: "/certificationsLogo.jpg",
    url: "https://bit.ly/RicardoM_CurriculumImages"
  },
]

export default function Education() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center sm:flex-row">
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
