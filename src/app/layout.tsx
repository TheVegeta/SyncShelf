import AppNavbar from "@/components/app/AppNavbar";
import AppProvider from "@/provider/AppProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SyncShelf | Organize & Share Your Digital World",
  description:
    "The ultimate collaborative bookmark manager. Save, organize, and sync your favorite links with friends and teammates seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <AppNavbar />

          {children}
        </AppProvider>
      </body>
    </html>
  );
}
