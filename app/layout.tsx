import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// TODO: Please update the title and description with your personal information
export const metadata: Metadata = {
  title: "Erjon Musa | AI/ML Engineer",
  description: "Computer Engineering graduate from Queen's University specializing in computer vision, deep learning, and embedded AI systems.",
  icons: {
    icon: "/EM_logo.png",
  },
  openGraph: {
    title: "Erjon Musa | AI/ML Engineer",
    description: "Computer Engineering graduate from Queen's University specializing in computer vision, deep learning, and embedded AI systems.",
    url: "https://erjonmusa.com",
    siteName: "Erjon Musa Portfolio",
    images: [
      {
        url: "/avatar.jpg", // Setting your actual photo as the preview image!
        width: 800,
        height: 800,
        alt: "Erjon Musa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erjon Musa | AI/ML Engineer",
    description: "Computer Engineering graduate from Queen's University specializing in computer vision, deep learning, and embedded AI systems.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              window.history.scrollRestoration = 'manual';
              window.scrollTo(0, 0);
            }
          `
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
