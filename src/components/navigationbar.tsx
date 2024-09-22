import Link from "next/link";
import { Mail, Menu } from "react-feather";

export default function NavigationBar(props: { index: number }) {
  return (
    <div className="mx-8 lg:mx-20 flex justify-between py-10">
      <Link href="mailto:me@manasmalla.dev">
        <div className="flex gap-4 items-center">
          <Mail className="w-5 h-5" />
          <span>me@manasmalla.dev</span>
        </div>
      </Link>
      <div className="gap-14 hidden lg:flex">
        <Link href="/" className={props.index == 0 ? "text-[#005AC1]" : ""}>
          Home
        </Link>
        <Link
          href="/resume"
          className={props.index == 1 ? "text-[#005AC1]" : ""}
        >
          Resume
        </Link>
        <Link
          href="/#achievements"
          className={props.index == 2 ? "text-[#005AC1]" : ""}
        >
          Achievements
        </Link>
        <Link
          href="/#work"
          className={props.index == 3 ? "text-[#005AC1]" : ""}
        >
          Work
        </Link>
        <Link
          href="/story"
          className={props.index == 4 ? "text-[#005AC1]" : ""}
        >
          Stories
        </Link>
        <a href="https://blog.manasmalla.dev">Blogs</a>
      </div>
      <Menu className="flex lg:hidden w-5 h-5" />
    </div>
  );
}
