import "./globals.css";

export const metadata = {
  title: "Modateng",
  description: "Your Ultimate Event Discovery and Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
