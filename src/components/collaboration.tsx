import Link from "next/link";
import { ArrowUpRight } from "react-feather";

export function CollaborationSection() {
  return (
    <div className="w-max mx-auto mb-24">
      <h2 className="text-2xl lg:text-5xl w-[18ch] font-semibold">
        Let me know if you want to talk about a potential collaboration.
        I&apos;m available for freelance work.
      </h2>
      <Link href="/contact" className="flex my-12">
        <h3 className="text-lg lg:text-3xl text-[#B06000]/40 dark:text-[#FDE293]/80 underline decoration-2 underline-offset-8">
          Let&apos;s build good things together
        </h3>{" "}
        <ArrowUpRight className="text-[#B06000]/30 w-8 h-8 ml-2 dark:text-[#FDE293]/80" />
      </Link>
    </div>
  );
}
