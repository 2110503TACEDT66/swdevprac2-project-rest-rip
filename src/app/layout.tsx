import TopMenu from "@/components/TopMenu";
import "./globals.css";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextAuthProvider from "@/providers/NextAuthProvider";
// import ReduxProvider from "@/redux/ReduxProvider";

const promt = Prompt({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "REST RIP Working Spaces",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextAuthSession = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={promt.className}>
        {/* <ReduxProvider> */}
          <NextAuthProvider session={nextAuthSession}>
            <TopMenu />
            {children}
          </NextAuthProvider>
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
