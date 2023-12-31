import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Box } from "@mui/material";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Dragon News",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <NavBar />
        <Box className="min-h-[calc(100vh-300px)]">{children}</Box>
        <Footer />
      </body>
    </html>
  );
}
