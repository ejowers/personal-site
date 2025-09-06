import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Group from "@/components/ui/Group";
import Image from "next/image";
import Link from "next/link";

const mainFont = Outfit({
  variable: "--font-main",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-clip">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background">
            <div className="font-sans items-center justify-items-center gap-16 flex flex-col w-full min-h-screen justify-between">
              <main
                className={`flex flex-col w-screen gap-[32px] row-start-2 items-center sm:items-start ${mainFont.className}`}
              >
                {/* Navbar */}
                <div className="h-30 w-full fixed top-0 left-0 bg-gray-50 z-100">
                  <Group className="w-full h-full justify-between items-center px-8">
                    <Group className="gap-4">
                      <Image
                        src="/monsters/purple-monster-round-logo.png"
                        alt="Round purple monster logo"
                        width={80}
                        height={80}
                        className="-rotate-10"
                      />
                      <p className="leading-none self-center">
                        Code <br />
                        <span className="font-extrabold">MONSTER</span>
                      </p>
                    </Group>
                    <Group className="gap-8 font-bold text-gray-600 hidden sm:flex">
                      <Link href="/" scroll={false}>
                        HOME
                      </Link>
                      <Link href="/about" scroll={false}>
                        ABOUT
                      </Link>
                      <Link href="/animations" scroll={false}>
                        ANIMATIONS
                      </Link>
                      <Link href="/work-history" scroll={false}>
                        WORK HISTORY
                      </Link>
                      <Link href="/contact" scroll={false}>
                        CONTACT
                      </Link>
                    </Group>
                  </Group>
                </div>
                <div className="w-full pt-30">{children}</div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
