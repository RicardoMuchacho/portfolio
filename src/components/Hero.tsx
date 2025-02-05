import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col mt-16 gap-2 items-center justify-center py-24 px-5 w-full text-base bg-[url('/bgPoly.png')] bg-no-repeat bg-cover sm:flex-row sm:gap-10 sm:px-20 sm:py-24">
      {/* Profile Image */}
      <Image
        src="/profileImg.png"
        alt="Profile"
        width={215}
        height={215}
        className="object-contain shadow-lg rounded-full"
      />

      <div className="relative flex items-center w-full max-w-[90%] md:max-w-[650px]">
        <Image
          src="/message.svg"
          alt="Message image"
          width={700}
          height={300}
          className="absolute w-full h-auto max-w-full drop-shadow-lg"
        />
        <Image
          src="/messageMobile.svg"
          alt="Message image mobile"
          width={300}
          height={180}
          className="object-cover absolute w-full h-[180px] max-w-full drop-shadow-lg sm:hidden"
        />
        <div className="relative mt-4 flex flex-col px-8 md:px-16 py-8 w-full max-w-full sm:mt-0">
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
