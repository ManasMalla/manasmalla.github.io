import Link from "next/link";

export default function Gallery() {
  return (
    <div className="my-28 text-black">
      <div className="flex gap-6">
        <div className="w-[40%] aspect-[0.974137931034483] h-max">
          <div className="w-full aspect-[2.1] mb-5 rounded-r-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)] relative">
            <img
              src="asj-manas.JPG"
              className="w-full h-full object-cover object-top rounded-r-md"
            />
            <div className="bg-black z-10 absolute w-full h-full top-0 rounded-r-md bg-opacity-0 hover:bg-opacity-30">
              <div className="w-full h-full flex top-0 absolute items-center justify-center opacity-0 hover:opacity-100">
                <Link
                  href="https://gdg.community.dev/events/details/google-gdg-vizag-presents-android-study-jams-session-3/"
                  className="bg-white h-max z-20 rounded-full px-8 py-2 font-bold"
                >
                  @Android Study Jams<span className="font-normal">, 2022</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full aspect-[2.025089605734767] rounded-r-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)] relative">
            <img
              src="gds-manas.jpg"
              className="w-full h-full object-cover rounded-r-md"
            />
            <div className="bg-black z-10 absolute w-full h-full top-0 rounded-r-md bg-opacity-0 hover:bg-opacity-30">
              <div className="w-full h-full flex top-0 absolute items-center justify-center opacity-0 hover:opacity-100">
                <div className="bg-white h-max z-20 rounded-full px-8 py-2 font-bold">
                  @Google Developer Summit
                  <span className="font-normal">, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[27%] relative aspect-[0.701724137931034] rounded-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]">
          <img src="image-main.jpg" className="w-full h-full rounded-md" />
          <div className="bg-black z-10 absolute w-full h-full top-0 rounded-r-md bg-opacity-0 hover:bg-opacity-30">
            <div className="w-full h-full flex top-0 absolute items-center justify-center opacity-0 hover:opacity-100">
              <Link
                href="https://www.instagram.com/totsnshotsbytejaswi/?hl=en"
                className="bg-white h-max z-20 rounded-full px-8 py-2 font-bold"
              >
                @TotsNShots
                <span className="font-normal">, 2023</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[34%] aspect-[square] h-max">
          <div className="w-full aspect-[1.385] mb-5 rounded-l-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)] relative">
            <img
              src="afs-manas.jpg"
              className="w-full h-full object-cover rounded-l-md "
            />
            <div className="bg-black z-10 absolute w-full h-full top-0 rounded-l-md bg-opacity-0 hover:bg-opacity-30">
              <div className="w-full h-full flex top-0 absolute items-center justify-center opacity-0 hover:opacity-100">
                <div className="bg-white h-max z-20 rounded-full px-8 py-2 font-bold">
                  @Android Feedback Summit
                  <span className="font-normal">, 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full aspect-[2.36] relative rounded-l-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]">
            <img
              src="dare-to-be-fearless.jpg"
              className="w-full h-full object-cover rounded-l-md object-[0%,10%] "
            />
            <div className="bg-black z-10 absolute w-full h-full top-0 rounded-l-md bg-opacity-0 hover:bg-opacity-30">
              <div className="w-full h-full flex top-0 absolute items-center justify-center opacity-0 hover:opacity-100">
                <Link
                  href="https://www.youtube.com/watch?v=MBZ4UmXvStM"
                  className="bg-white h-max z-20 rounded-full px-8 py-2 font-bold"
                >
                  @International Women&apos;s Day
                  <span className="font-normal">, 2023</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 mt-4">
        <div className="w-[60%] aspect-[3.3] relative rounded-r-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]">
          <img
            src="iwd-manas.jpg"
            className="w-full h-full object-cover rounded-r-md object-top"
          />
          <div className="bg-black z-10 absolute w-full h-full top-0 rounded-r-md bg-opacity-0 hover:bg-opacity-30">
            <div className="w-full h-full flex top-0 absolute items-center justify-center opacity-0 hover:opacity-100">
              <Link
                href="https://iwdvizag.vercel.app"
                className="bg-white h-max z-20 rounded-full px-8 py-2 font-bold"
              >
                @International Women&apos;s Day: Vizag
                <span className="font-normal">, 2023</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[18%] aspect-[1.8] relative rounded-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]">
          <img
            src="wed-manas.jpeg"
            className="w-full h-full object-cover rounded-md "
          />
          <div className="bg-black z-10 absolute w-full h-full top-0 rounded-md bg-opacity-0 hover:bg-opacity-30">
            <div className="w-full h-full flex top-0 absolute items-center justify-center opacity-0 hover:opacity-100">
              <div className="bg-white h-max z-20 rounded-full px-8 py-2 font-bold">
                @A1Grand
                <span className="font-normal">, 2019</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[22%] aspect-[1.6] rounded-l-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)] relative">
          <img
            src="temple-manas.JPG"
            className="w-full h-full object-cover rounded-l-md "
          />
          <div className="bg-black z-10 absolute w-full h-full top-0 rounded-l-md bg-opacity-0 hover:bg-opacity-30">
            <div className="w-full h-full flex top-0 absolute items-center justify-center opacity-0 hover:opacity-100">
              <Link
                href="https://hinduheritage.wildapricot.org/"
                className="bg-white h-max z-20 rounded-full px-8 py-2 font-bold"
              >
                @Hindu Temple Of
                <br />
                Central Illinois
                <span className="font-normal">, 2010</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
