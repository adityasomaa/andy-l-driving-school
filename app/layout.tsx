import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { ChatProvider } from "@/components/Chat";
import { PageTransition } from "@/components/PageTransition";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

// Heavy condensed Barlow for headings (close to the logo's lettering), Barlow for reading
const barlowCondensed = Barlow_Condensed({ variable: "--font-barlow-condensed", weight: ["600", "700", "800"], subsets: ["latin"] });
const barlow = Barlow({ variable: "--font-barlow", weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://andy-l-driving-school.vercel.app"),
  title: "Andy L Driving School — Driving Lessons in Perth, Pass First Time",
  description:
    "Automatic and manual driving lessons in Perth's northern suburbs with Andy, from $75. Pickup and drop-off, dual-control cars, Lesson & Test packages for Mirrabooka, Joondalup, Midland and City West. 5.0 on Google from 300 reviews.",
  openGraph: {
    title: "Andy L Driving School, Perth",
    description: "Book automatic or manual driving lessons with Andy online. Pickup included, 5.0 from 300 reviews.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 1600 }],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f6f1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable} is-loading antialiased`} suppressHydrationWarning>
      <body className="min-h-dvh">
        <SmoothScroll>
          <PageTransition>
            <ChatProvider>{children}</ChatProvider>
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
