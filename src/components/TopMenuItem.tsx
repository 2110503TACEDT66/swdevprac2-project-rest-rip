import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  href: string;
};

function TopMenuItem({ title, href }: TopMenuItemProps) {
  return (
    <Link href={href} className="text-lg bg-slate-700  hover:bg-neutral-400">
      {title}
    </Link>
  );
}

export default TopMenuItem;
