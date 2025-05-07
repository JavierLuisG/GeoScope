import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { ContextGlobalProvider } from "../context/globalContext";

export const metadata: Metadata = {
  title: "Geo Scope",
  description: "GeoScope te permite explorar imágemes satelitales y gestionar tus AOI sobre un mapa interactivo",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <ContextGlobalProvider>
          <Providers>
            {children}
          </Providers>
        </ContextGlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
