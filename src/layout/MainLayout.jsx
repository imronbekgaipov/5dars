import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="lg:flex h-screen">
      <Navbar />
      <main className="bg-pearl-white max-container md:tab-container">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
