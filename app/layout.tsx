import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";





export const metadata: Metadata = {
  title: "OpenShelf",
  description: "Library Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
      </body>
    </html>
  );
}
