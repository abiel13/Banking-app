import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlex = IBM_Plex_Serif({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  variable: "--font-ibm-serif",
});

// TODO:ADD ICON

export const metadata: Metadata = {
  title: "A-Bank",
  description: "Online Banking App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ibmPlex.className} `}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >{children}</ThemeProvider>
      </body>
    </html>
  );
}
