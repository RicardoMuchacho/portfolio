import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const linkedinUrl = "https://www.linkedin.com/in/ricardo-muchacho-8400171b5/"
const githubUrl = "https://github.com/RicardoMuchacho"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 justify-center items-center px-52 py-6 w-full text-xl bg-neutral-100 max-md:px-5 max-md:max-w-full md:justify-between md:gap-10 md:flex-row">
      <a
        href="mailto:email@gmail.com"
        className="text-lg hover:text-gray-600 transition-colors"
      >
        ricardomuchacho.developer@gmail.com
      </a>
      <div className="flex flex-row gap-5">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-gray-600 transition-colors" />
        </Link>
        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:text-gray-600 transition-colors" />
        </Link>
      </div>
    </footer>
  );
}
