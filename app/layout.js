// app/layout.js
import "./globals.css";
import "./fonts.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "PCD Pharma Franchise Company in India with Monopoly Rights",
  description:
    "Leading PCD pharma franchise company in India offering quality drug PCD pharma franchise opportunities with strong support and a wide product range.",
  keywords: [
    "pcd pharma franchise in india",
    "pharma franchise opportunities",
    "pcd pharma franchise company in india",
    "best pcd pharma franchise company",
    "pcd pharma business in india"
  ]
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 
        Keep className stable and predictable
        — no dynamic values that can differ between SSR and client.
      */}
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Whatsapp Button */}
        <WhatsAppButton />

        {/* ✅ Optional: Load Tawk.to script safely */}

        {/* <Script id="tawk-to" strategy="afterInteractive">
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
        </Script> */}

      </body>
    </html>
  );
}
