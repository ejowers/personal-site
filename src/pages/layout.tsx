import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-clip`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background">
            {/* <Navbar /> */}

            <div className="font-sans items-center justify-items-center gap-16">
              <main className="flex flex-col w-screen gap-[32px] row-start-2 items-center sm:items-start">
                {children}
              </main>
              <footer className="row-start-3 flex w-full h-60 gap-4 md:gap-8 py-5 px-10 z-40 bg-white dark:bg-neutral-950 text-neutral-100 flex-wrap items-end justify-end bg-wave">
                {/* resume, socials, blob line */}
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogoIcon
                    size="20px"
                    weight="fill"
                    className="rounded-2xl"
                  />
                  LinkedIn
                </a>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogoIcon
                    size="20px"
                    weight="fill"
                    className="rounded-2xl"
                  />
                  GitHub
                </a>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
