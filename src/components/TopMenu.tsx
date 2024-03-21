import Link from "next/link";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="relative w-full h-20 flex justify-between items-center">
      <div className="flex p-3">
        {session ? (
          <TopMenuItem title="Sign-out" href="/api/auth/signout" />
        ) : (
          <TopMenuItem title="Sign-in" href="/api/auth/signin" />
        )}
      </div>
      <div className="flex">
        <TopMenuItem title="Booking" href="/booking" />
      </div>
    </div>
  );
}

export default TopMenu;
