import "@/utils/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { title, subtitle, BreadcrumbsState } from "@/components/common";
import { fontSans } from "@/utils/fonts";
import { Navbar } from "@/components/header/navbar";

export const metadata: Metadata = {
  title: {
    default: "Control de usuarios",
    template: `%s - Control de usuarios`,
  },
  description: "Herramienta Informático - Control de usuarios",
  icons: {
    icon: "/user.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl flex-grow">
              <span className={title({ size: "sm" })}>Control de usuarios</span>
              <div className={subtitle()}>
                <BreadcrumbsState />
              </div>
              {children}
            </main>
            {/* <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://heroui.com?utm_source=next-app-template"
                  title="heroui.com homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">HeroUI</p>
                </Link>
              </footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
