import { Roboto } from "next/font/google"
import Footer from "app/components/shared/Footer";
import Header from "app/components/shared/Header";
import "../styles/globals.css";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin-ext"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
