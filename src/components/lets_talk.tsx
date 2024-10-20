import Link from "next/link";

export function LetsTalkSection() {
  return (
    <div className="my-20 overflow-y-visible h-[0rem] -translate-y-[16rem]">
      <div className="relative">
        <div className="bg-[#EAF9FA] dark:bg-opacity-10 w-3/4 lg:w-1/3 aspect-square absolute -right-16 lg:-right-36 rounded-full" />
        <div className="border-[#93CED2] dark:opacity-30 border-2 w-3/4 lg:w-1/3 aspect-square absolute -right-0 lg:-right-8 top-16 rounded-full border-dashed" />
        <img
          src="party-memoji.png"
          className="w-32 lg:w-48 right-28 lg:right-44 absolute"
        />
        <div className="right-8 lg:right-16 top-28 lg:top-48 absolute">
          <h3 className="text-lg lg:text-2xl text-[#6DA0A4]">Connect</h3>
          <h3 className="text-lg lg:text-2xl">Got a project</h3>
          <Link
            href="/contact"
            className="underline text-lg lg:text-2xl font-bold underline-offset-8"
          >
            Lets Talk!
          </Link>
        </div>
      </div>
    </div>
  );
}
