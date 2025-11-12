// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fonts.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Biozoc",
  description: "Leading PCD Pharma & Third Party Manufacturing Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 
        Keep className stable and predictable
        — no dynamic values that can differ between SSR and client.
      */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* ✅ Optional: Load Tawk.to script safely */}

        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/690c4136418b98195b55193c/1j9bttfv8';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

      </body>
    </html>
  );
}
