import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teetormaja",
  description: "Teetormaja Koduleht",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" overflow-x-hidden min-w-52">
        <div className="flex flex-col justify-between items-center h-fit">
      <Header />
        {children}
      <Footer />
      </div>
      </body>
    </html>
  );
}
