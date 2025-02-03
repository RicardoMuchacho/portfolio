import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row mt-16 gap-10 items-center justify-center py-24 px-5 md:px-20 w-full text-base bg-[url('/bgPoly.png')] bg-no-repeat bg-cover">
      {/* Profile Image */}
      <Image
        src="/profileImg.png"
        alt="Profile"
        width={215}
        height={215}
        className="object-contain shadow-lg rounded-full"
      />

      {/* Message Container (Now Responsive) */}
      <div className="relative flex items-center w-full max-w-[90%] md:max-w-[650px]">
        {/* Message Bubble Image (Now Scales with Text) */}
        <Image
          src="/message.svg"
          alt="Message background"
          width={700}
          height={300}
          className="absolute w-full h-auto max-w-full drop-shadow-lg"
        />

        {/* Text Content */}
        <div className="relative flex flex-col px-8 md:px-16 py-8 w-full max-w-full">
          <h1 className="text-lg text-black mb-4 sm:text-4xl">
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
