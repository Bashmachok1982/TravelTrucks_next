import Providers from "@/app/providers";
import Header from "@/components/Header/Header";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "TravelTrucks — Camper Rental",
  description: "Rent the camper of your dreams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
