import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  href: string;
};

function TopMenuItem({ title, href }: TopMenuItemProps) {
  return (
    <Link href={href} className="text-md  hover:bg-neutral-400 hover:rounded-full hover:px-4">
      {title}
    </Link>
  );
}

export default TopMenuItem;
