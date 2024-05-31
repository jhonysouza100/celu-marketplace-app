import { Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Poppins({ subsets: ["latin"],  weight: ["400", "500", "600"] });

export const metadata = {
  title: "Celu Marketplace",
  description: "Celu Marketplace - Encuentra los últimos modelos de celulares nuevos con garantía al precio más bajo en Mar del Plata, Argentina. Amplia selección de smartphones de marcas reconocidas como Samsung, iPhone, Xiaomi y más. También ofrecemos una variedad de accesorios para complementar tu dispositivo. ¡Visita nuestra tienda y encuentra la mejor oferta para ti!",
};

const pages = [
  { name: "Home", path: "/" },
];

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="es">
      <body className={`${inter.className} bg-body text-secondary text-sm xl:text-base select-none`}>
        {/* <Navbar pages={pages} /> */}
        <main className="main overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
