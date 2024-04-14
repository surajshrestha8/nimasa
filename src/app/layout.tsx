import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Nimasa",
  description: "Website for Nimasa ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
