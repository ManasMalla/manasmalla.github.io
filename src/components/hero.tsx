import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="mx-20 w-[56%] text-center mx-auto">
      <div className="mx-auto w-24 aspect-square rounded-full bg-[#005AC1] bg-opacity-10">
        <img src="/memoji.png" className="mx-1 mt-2 p-1" />
      </div>
      <h3 className="mb-5 mt-10">Hi, I&apos;m Manas Malla</h3>
      <h1 className="text-6xl leading-[1.3em]">
        <span className="underline decoration-[#005AC1]/20 decoration-dashed">
          Building
        </span>{" "}
        solutions
        <br />
        is my ikigai.
      </h1>
      <h2 className="text-2xl font-light mb-14 mt-10">
        <span className="font-semibold">
          a Designer, Developer, Speaker, Student and Tech Geek
        </span>
        <br />I specialise in Swift Development, UI/UX design, Android
        development, Flutter Development and open-source contribtion
      </h2>
      <button
        onClick={() => {
          router.push("/contact");
        }}
        className="bg-black text-white px-12 py-3 rounded-full uppercase"
      >
        Connect with Me
      </button>
    </div>
  );
}
