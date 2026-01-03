import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nirmal Nemade | Full Stack Developer",
  description: "Portfolio of Nirmal Nemade - Full Stack Developer with 2 years of experience in React.js, Spring Boot, and modern web technologies. Specialized in building secure, scalable applications.",
  keywords: "Full Stack Developer, React.js, Spring Boot, Java, JavaScript, TypeScript, Next.js, PostgreSQL, Nirmal Nemade",
  authors: [{ name: "Nirmal Nemade" }],
  openGraph: {
    title: "Nirmal Nemade | Full Stack Developer",
    description: "Portfolio of Nirmal Nemade - Full Stack Developer specializing in React.js, Spring Boot, and modern web technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
