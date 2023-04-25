import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="mx-auto lg:mx-20 lg:w-[56%] text-center lg:mx-auto">
      <div className="mx-auto w-24 aspect-square rounded-full bg-[#005AC1] dark:bg-[#D2E3FC] bg-opacity-10 dark:bg-opacity-10">
        <img src="/memoji.png" className="mx-1 mt-2 p-1" />
      </div>
      <h3 className="mb-5 mt-10">Hi, I&apos;m Manas Malla</h3>
      <h1 className="text-4xl lg:text-6xl leading-[1.3em]">
        <span className="underline decoration-[#005AC1]/20 decoration-dashed">
          Building
        </span>{" "}
        solutions
        <br />
        is my ikigai.
      </h1>
      <h2 className="lg:text-2xl font-light mb-14 mt-10 mx-8 lg:mx-auto">
        <span className="font-semibold">
          a Designer, Developer, Speaker, Student and Tech Geek
        </span>
        <br />I specialise in Swift Development, UI/UX design, Android
        development, Flutter Development and open-source contribtion
        <h3 className="mt-4 text-gray-400">
          <div className="typing font-mono">#BeingAForceForChange</div>
          <div className="inline-flex opacity-50 ml-1 blinking">|</div>
        </h3>
      </h2>
      <button
        onClick={() => {
          router.push("/contact");
        }}
        className="bg-black dark:bg-white text-white dark:text-black px-12 py-3 rounded-full uppercase"
      >
        Connect with Me
      </button>
    </div>
  );
}
