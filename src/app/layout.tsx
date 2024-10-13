import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import "./styles/_globals.scss";
import { Header } from "@/components/shared";

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Films",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={nunito.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
