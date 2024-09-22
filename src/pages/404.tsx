import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" />
      <div className="-translate-y-[100%] flex flex-col">
        <p className="text-4xl pb-6">Oops, looks like you're lost!</p>
        <Link
          href={"/"}
          className="px-6 w-full text-center rounded-lg py-3 bg-amber-400"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
