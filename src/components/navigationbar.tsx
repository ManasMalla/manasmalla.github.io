import Link from "next/link";
import { Mail, Menu } from "react-feather";

export default function NavigationBar() {
  return (
    <div className="mx-8 lg:mx-20 flex justify-between py-10">
      <Link href="mailto:manasmalla.dev@gmail.com">
        <div className="flex gap-4 items-center">
          <Mail className="w-5 h-5" />
          <a>manasmalla.dev@gmail.com</a>
        </div>
      </Link>
      <div className="gap-14 hidden lg:flex">
        <Link href="/" className="text-[#005AC1]">
          Home
        </Link>
        <Link href="/#resume">Resume</Link>
        <Link href="/#achievements">Achievements</Link>
        <Link href="/#work">Work</Link>
        <a>Stories</a>
        <a>Blogs</a>
      </div>
      <Menu className="flex lg:hidden w-5 h-5" />
    </div>
  );
}
