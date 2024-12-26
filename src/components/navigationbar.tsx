import Link from "next/link";
import { Mail, Menu } from "react-feather";

export default function NavigationBar(props: { index: number }) {
  return (
    <div className="mx-8 lg:mx-20 flex justify-between py-6 pb-10">
      <Link href="mailto:me@manasmalla.dev" className="py-2 text-sm">
        <div className="flex gap-4 items-center">
          <Mail className="w-5 h-5" />
          <span>me@manasmalla.dev</span>
        </div>
      </Link>
      <div className="gap-4 hidden lg:flex">
        <Link
          href="/"
          className={`${
            props.index == 0 ? "bg-[#005AC1] text-white" : ""
          } py-2 px-4 rounded-full text-[12px]`}
        >
          Home
        </Link>
        <Link
          href="/resume"
          className={`${
            props.index == 1 ? "bg-[#005AC1] text-white" : ""
          } py-2 px-4 rounded-full text-[12px]`}
        >
          Resume
        </Link>
        <Link
          href="/#achievements"
          className={`${
            props.index == 2 ? "bg-[#005AC1] text-white" : ""
          } py-2 px-4 rounded-full text-[12px]`}
        >
          Achievements
        </Link>
        <Link
          href="/#work"
          className={`${
            props.index == 3 ? "bg-[#005AC1] text-white" : ""
          } py-2 px-4 rounded-full text-[12px]`}
        >
          Work
        </Link>
        <Link
          href="/story"
          className={`${
            props.index == 4 ? "bg-[#005AC1] text-white" : ""
          } py-2 px-4 rounded-full text-[12px]`}
        >
          Stories
        </Link>
        <a
          href="https://blog.manasmalla.dev"
          className={`${
            props.index == 6 ? "bg-[#005AC1] text-white" : ""
          } py-2 px-4 rounded-full text-[12px]`}
        >
          Blogs
        </a>
      </div>
      <Menu className="flex lg:hidden w-5 h-5" />
    </div>
  );
}
