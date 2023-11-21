import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modateng",
  description: "Your Ultimate Event Discovery and Booking Platform",
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
