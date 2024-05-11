import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { pages } from "../router";

export default function Layout({ children }) {
  console.log("component LAYOUT rendered");

  return (
    <div>
      <Navbar pages={pages} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
