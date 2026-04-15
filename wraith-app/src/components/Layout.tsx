import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden font-body text-on-surface bg-surface-container-lowest">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
