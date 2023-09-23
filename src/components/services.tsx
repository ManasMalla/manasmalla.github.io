import { Codesandbox, Instagram, Layers } from "react-feather";

export default function Services() {
  return (
    <div className="relative items-center flex flex-col">
      <div className="h-full w-full lg:w-3/4 bg-[#005AC1] bg-opacity-5 absolute left-[calc(50% - 37.5%)] -z-10 dark:z-0"></div>
      <div className="h-full w-full lg:w-3/4 bg-black dark:bg-white bg-opacity-[1%] dark:bg-opacity-[2%] absolute left-[calc(50% - 37.5%)] -z-10 dark:z-0"></div>
      <h2 className="text-3xl py-8 lg:py-16">Services</h2>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-24 mx-4 lg:mx-16 mb-12">
        <div className="bg-white dark:bg-slate-950 p-8 shadow-[0_4px_32px_4px_rgba(0,0,0,0.03)]">
          <div className="h-20 w-20 items-end flex">
            <Codesandbox className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-semibold mt-6">App Development</h3>
          <p className="w-3/4">
            Why just stop at one platform when you can build for many?
          </p>
        </div>
        <div className="bg-white  dark:bg-slate-950 p-8 shadow-[0_4px_32px_4px_rgba(0,0,0,0.03)]">
          <div className="h-20 w-20 items-end flex">
            <Layers className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-semibold mt-6">Design UI/UX</h3>
          <p className="w-3/4">
            Creativity has always been my passion, why stop now?
          </p>
        </div>
        <div className="bg-white  dark:bg-slate-950 p-8 shadow-[0_4px_32px_4px_rgba(0,0,0,0.03)]">
          <div className="h-20 w-20 items-end flex">
            <Instagram className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-semibold mt-6">Social & Media</h3>
          <p className="w-3/4">
            Sharing is caring, creating is my calling, why not do them together?
          </p>
        </div>
      </div>
    </div>
  );
}
