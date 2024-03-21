import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  href: string;
};

function TopMenuItem({ title, href }: TopMenuItemProps) {
  return (
    <Link href={href} className="px-5 py-7 text-xl hover:bg-neutral-400">
      {title}
    </Link>
  );
}

export default TopMenuItem;
