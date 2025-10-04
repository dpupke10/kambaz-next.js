import { Roboto } from "next/font/google";

// import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400", // Specify the font weight
});

export const metadata = {
  title: "My App",
  description: "My App Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
