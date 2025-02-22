import "./globals.css";

import type { Metadata } from "next";

import NavigationWrapper from "@/components/Navigation/NavigationWrraper";

export const metadata: Metadata = {
  title: "M Countdown App",
  description: "엠카운트다운 모바일 앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <NavigationWrapper />
        <div className="relative mx-auto min-h-900 max-w-430">{children}</div>
      </body>
    </html>
  );
}
