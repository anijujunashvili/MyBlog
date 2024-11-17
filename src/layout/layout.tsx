import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
