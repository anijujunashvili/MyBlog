import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <main className="flex-grow px-4 py-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};
