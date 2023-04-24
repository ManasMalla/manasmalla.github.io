import Link from "next/link";
import { GitHub, Instagram, Linkedin, Mail, Twitter } from "react-feather";

export default function Footer() {
  return (
    <div className="py-16 px-36 border-t-[0.05em] flex justify-between">
      <div className="flex gap-12">
        <Instagram className="stroke-[1.5] w-5 h-5" />
        <Twitter className="stroke-[1.5] w-5 h-5" />
        <Linkedin className="stroke-[1.5] w-5 h-5" />
        <GitHub className="stroke-[1.5] w-5 h-5" />
      </div>
      <div className="flex gap-4">
        <Link href="mailto:manasmalla.dev@gmail.com">
          <div className="flex gap-4 items-center">
            <Mail className="w-5 h-5" />
            <a>manasmalla.dev@gmail.com</a>
          </div>
        </Link>
      </div>
    </div>
  );
}
