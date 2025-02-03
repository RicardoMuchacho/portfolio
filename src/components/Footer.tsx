export default function Footer() {
  return (
    <footer className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-52 py-6 w-full text-xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <a
        href="mailto:email@gmail.com"
        className="self-stretch my-auto w-[270px] hover:text-gray-600 transition-colors"
      >
        email@gmail.com
      </a>
      <div className="self-stretch my-auto w-[270px]">
        github / linkedin / contact
      </div>
    </footer>
  );
}
