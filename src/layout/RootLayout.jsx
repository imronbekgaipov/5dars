import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className="lg:flex">
      <Navbar />
      <main className="max-container">
        <Outlet />
      </main>
      {/* Foter */}
    </div>
  );
}

export default RootLayout;
