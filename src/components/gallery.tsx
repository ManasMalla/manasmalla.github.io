export default function Gallery() {
  return (
    <div className="my-28">
      <div className="flex gap-6">
        <div className="w-[40%] aspect-[0.974137931034483] h-max">
          <img
            src="asj-manas.JPG"
            className="w-full aspect-[2.1] object-cover object-top mb-5 rounded-r-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]"
          />
          <img
            src="gds-manas.jpg"
            className="w-full aspect-[2.025089605734767] object-cover rounded-r-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]"
          />
        </div>

        <img
          src="image-main.jpg"
          className="w-[27%] aspect-[0.701724137931034] rounded-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]"
        />

        <div className="w-[34%] aspect-[square] h-max">
          <img
            src="afs-manas.jpg"
            className="w-full aspect-[1.385] object-cover mb-5 rounded-l-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]"
          />
          <img
            src="dare-to-be-fearless.jpg"
            className="w-full aspect-[2.36] object-cover rounded-l-md object-[0%,10%] shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]"
          />
        </div>
      </div>
      <div className="flex gap-6 mt-4">
        <img
          src="iwd-manas.jpg"
          className="w-[60%] aspect-[3.3] object-cover rounded-r-md object-top shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]"
        />
        <img
          src="wed-manas.jpeg"
          className="w-[18%] aspect-[1.8] object-cover rounded-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]"
        />
        <img
          src="temple-manas.JPG"
          className="w-[22%] aspect-[1.6] object-cover rounded-l-md shadow-[0_4px_32px_4px_rgba(0,0,0,0.16)]"
        />
      </div>
    </div>
  );
}
