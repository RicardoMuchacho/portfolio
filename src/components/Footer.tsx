import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-52 py-6 w-full text-xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <a
        href="mailto:email@gmail.com"
        className="text-lg hover:text-gray-600 transition-colors"
      >
        ricardomuchacho.developer@gmail.com
      </a>
      <div className="flex flex-row gap-5">
        <FaGithub className="text-3xl hover:text-gray-600 transition-colors" />
        <FaLinkedin className="text-3xl hover:text-gray-600 transition-colors" />
      </div>
    </footer>
  );
}
