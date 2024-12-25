import { useRouter } from "next/router";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="mx-auto lg:mx-20 lg:w-[56%] text-center lg:mx-auto">
      <div className="mx-auto w-24 aspect-square rounded-full bg-[#005AC1] dark:bg-[#D2E3FC] bg-opacity-10 dark:bg-opacity-[15%]">
        <img src="/wink-memoji.png" className="ml-[-2px] mt-2" />
      </div>
      <h3 className="mb-5 mt-8 text-xl font-medium">
        Namaste, I&apos;m Manas Malla
      </h3>
      <h1 className="text-4xl lg:text-6xl leading-[1.3em] font-semibold">
        <span className="underline decoration-[#005AC1]/20 decoration-dashed">
          Building
        </span>{" "}
        solutions
        <br />
        is my ikigai.
      </h1>
      <h2 className="font-light mb-12 mt-10 mx-8 lg:mx-auto max-w-[450px]">
        a{" "}
        <span className="font-semibold">
          Designer, Developer <span className="font-normal">and</span> Student
        </span>{" "}
        in Vizag.
        <br />I specialise in App Development, Responsive Web Development, UI/UX
        Design and Open-Source contribtion.
        {/* <span className="block mt-4 text-gray-400">
          <div className="typing font-mono">#BeingAForceForChange</div>
          <div className="inline-flex opacity-50 ml-1 blinking">|</div>
        </span> */}
      </h2>
      <button
        onClick={() => {
          router.push("/contact");
        }}
        className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full uppercase text-[10px]"
      >
        Connect with Me
      </button>
    </div>
  );
}
