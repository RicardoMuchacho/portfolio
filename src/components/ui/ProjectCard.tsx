import Image from "next/image";
import { Project } from "../Projects";
import Link from "next/link";

export default function ProjectCard({ title, description, url, src }: Project) {
  return (
    <article className="flex flex-col h-full border border-gray-100 rounded-md shadow-lg">
      <Link href={url || "#"} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={title}
          width={350}
          height={200}
          className="object-cover size-full"
        />
      </Link>
      <div className="flex border-t-2 border-gray-200 p-4 flex-col">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2.5 text-sm">{description}</p>
      </div>
    </article>
  );
}
