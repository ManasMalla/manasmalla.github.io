export default function Services() {
  return (
    <div className="relative items-center flex flex-col">
      <div className="h-full w-3/4 bg-[#005AC1] bg-opacity-5 absolute left-[calc(50% - 37.5%)] -z-10"></div>
      <div className="h-full w-3/4 bg-black bg-opacity-[1%] absolute left-[calc(50% - 37.5%)] -z-10"></div>
      <h2 className="text-3xl py-16">Services</h2>
      <div className="flex gap-24 mx-16 mb-12">
        <div className="bg-white p-8 shadow-[0_4px_32px_4px_rgba(0,0,0,0.03)]">
          <div className="h-20 w-20 bg-gray-200" />
          <h3 className="text-2xl font-semibold mt-6">App Development</h3>
          <p className="w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white p-8 shadow-[0_4px_32px_4px_rgba(0,0,0,0.03)]">
          <div className="h-20 w-20 bg-gray-200" />
          <h3 className="text-2xl font-semibold mt-6">Design UI/UX</h3>
          <p className="w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white p-8 shadow-[0_4px_32px_4px_rgba(0,0,0,0.03)]">
          <div className="h-20 w-20 bg-gray-200" />
          <h3 className="text-2xl font-semibold mt-6">Social & Media</h3>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
