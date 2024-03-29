import "styles/globals.scss";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Browsersize from "@components/Browsersize";
import Footer from "@components/Footer/Footer";

export const metadata = {
  title: "Rentals Name",
  description: "",
  openGraph: {
    title: "Rentals Name",
    description: "",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Browsersize />
        <Footer />
      </body>
    </html>
  );
}
