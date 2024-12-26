import Link from "next/link";
import { ArrowUpRight } from "react-feather";

export default function ResumeTileCard({
  title,
  subtitle,
  third_line,
  link,
}: {
  title: string;
  subtitle: string;
  third_line: string;
  link?: string | undefined;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center">
        <h4 className="text-xl font-semibold">{title}</h4>
        {link && (
          <Link href={link || "/"} className="ml-[6px]">
            <ArrowUpRight />
          </Link>
        )}
      </div>
      <h5 className="text-sm font-semibold mt-[6px] mb-1">{subtitle}</h5>
      <p className="text-sm opacity-50 font-medium">{third_line}</p>
    </div>
  );
}
