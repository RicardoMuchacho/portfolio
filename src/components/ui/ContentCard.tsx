import Image from "next/image";
import Link from "next/link";

export interface IContentCard {
  title: string;
  description: string;
  url?: string;
  src: string;
}

export default function ContentCard({ title, description, url, src }: IContentCard) {
  return (
    <article className="flex flex-col h-full w-full max-w-[400px] border border-gray-100 rounded-md shadow-lg">
      <Link href={url || "#"} target={url ? "_blank" : ""} rel="noopener noreferrer">
        <Image
          src={src}
          alt={title}
          width={350}
          height={250}
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
