import Link from "next/link";
import { ArrowUpRight } from "react-feather";

export default function MultiResumeTileCard({
  title,
  items,
  link,
}: {
  title: string;
  items: {
    subtitle: string;
    third_line: string;
    link?: string | undefined;
    overline?: string;
  }[];
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
      <div className="flex flex-col gap-4 mt-[6px]">
        {items.map((item) => (
          <div>
            <div className="flex items-center">
              <h5 className="text-sm font-semibold mt-[6px] mb-1">
                {item.subtitle}
              </h5>
              {item.link && (
                <Link href={item.link || "/"} className="ml-[6px]">
                  <ArrowUpRight className="py-1" />
                </Link>
              )}
            </div>
            {item.overline && (
              <p className="text-sm opacity-50 font-medium mb-1">
                {item.overline}
              </p>
            )}
            <p className="text-sm opacity-50 font-medium">{item.third_line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
