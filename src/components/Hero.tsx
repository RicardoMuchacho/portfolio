import Image from "next/image";
import ParticlesBg from "./ui/ParticlesBg";

export default function Hero() {
  return (
    <section className="relative flex flex-col mt-16 gap-2 items-center justify-center py-24 px-5 w-full text-base border-b-2 border-gray-200 sm:flex-row sm:gap-10 sm:px-20 sm:py-24">
      <ParticlesBg />
      {/* Profile Image */}
      <Image
        src="/profileImg.png"
        alt="Profile"
        width={215}
        height={215}
        className="object-contain shadow-lg rounded-full z-0 border-gray-100 border-2"
      />
      <div className="relative flex items-center w-full h-full bg-white drop-shadow-lg bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-20 max-w-[90%] md:max-w-[650px]">
        {/* <Image
            src="/message.svg"
            alt="Message image"
            width={700}
            height={300}
            className="w-full h-auto rounded-lg"
          /> */}
        {/* <Image
          src="/messageMobile.svg"
          alt="Message image mobile"
          width={300}
          height={180}
          className="object-cover absolute w-full h-[180px] max-w-full drop-shadow-lg sm:hidden"
          /> */}
        <div className="relative mt-4 flex flex-col px-4 py-4  md:px-4 md:pl-8 w-full sm:mt-0 max-w-full">
          <h1 className="text-lg font-bold mb-2 text-center sm:text-4xl sm:mb-4 sm:text-start">
            Hello! I'm Ricardo
          </h1>
          <p className="text-sm text-black sm:text-lg">
            A frontend developer with a passion for problem-solving and creating
            efficient, user-friendly web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
