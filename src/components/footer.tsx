import Link from "next/link";
import {
  GitHub,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "react-feather";

export default function Footer() {
  return (
    <div className="py-16 px-8 lg:px-36 border-t-[0.05em] flex lg:flex-row flex-col gap-12 lg:gap-0 justify-between">
      <div className="flex gap-12">
        <Link href="https://instagram.com/manas_malla">
          <Instagram className="stroke-[1.5] w-5 h-5" />
        </Link>
        <Link href="https://twitter.com/manas_malla_">
          <Twitter className="stroke-[1.5] w-5 h-5" />
        </Link>
        <Link href="https://www.linkedin.com/in/manasmalla">
          <Linkedin className="stroke-[1.5] w-5 h-5" />
        </Link>
        <Link href="https://github.com/ManasMalla">
          <GitHub className="stroke-[1.5] w-5 h-5" />
        </Link>
        <Link href="https://youtube.com/@MallaManas">
          <Youtube className="stroke-[1.5] w-5 h-5" />
        </Link>
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
