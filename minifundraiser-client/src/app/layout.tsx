import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Web3ModalProvider from "@/context";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MiniFundraiser",
  description: "Fundraising Platform for MiniPay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Web3ModalProvider initialState={initialState}>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
