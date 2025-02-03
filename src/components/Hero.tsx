import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex mt-16 gap-10 items-center px-40 py-24 w-full text-base bg-[url('/bgPoly.png')] bg-no-repeat bg-cover max-md:px-5">
      <Image
        src="/profileImg.png"
        alt="Profile"
        width={200}
        height={200}
        className="object-contain shadow-md rounded-full -mt-5 mb-5"
      />
      <div className="pb-1.5 my-auto min-w-60 max-md:max-w-full">
        <div className="flex relative flex-col px-16 py-8 w-full min-h-[180px] max-md:px-5 max-md:max-w-full">
          <Image
            src="/message.svg"
            alt="message background"
            width={250}
            height={100}
            className="object-contain absolute inset-0 size-full drop-shadow-lg"
          />
          <h1 className="relative text-lg text-black mb-4 md:text-4xl">
            Hello! I'm Ricardo
          </h1>
          <p className="relative text-sm text-black md:text-lg">
            A fullstack developer with a passion for problem-solving and creating
            efficient, user-friendly web applications
          </p>
        </div>
      </div>
    </section>
  );
}
