import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex fixed top-0 gap-10 z-50 justify-center items-center px-20 py-5 w-full text-md font-bold text-white bg-black min-h-[50px]">
      <div className="absolute left-20">
        <Image
          src={"/logo.svg"}
          alt={"Logo Image"}
          width={80}
          height={80}
        />
      </div>
      <div className="flex-grow flex justify-center gap-10">
        <a
          href="#projects"
          className="my-auto hover:text-gray-300 transition-colors"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="my-auto hover:text-gray-300 transition-colors"
        >
          Experience
        </a>
        <a
          href="#skills"
          className="my-auto hover:text-gray-300 transition-colors"
        >
          Skills
        </a>
      </div>
    </nav>
  );
}
