import { Link } from "react-router-dom";
import HeaderMenu from "./header-menu.tsx";
import HeaderRight from "./header-right.tsx";

export const Header = () => {
  return (
    <>
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/home" className="text-2xl font-bold">
            MyBlog
          </Link>
          <HeaderMenu />
          <HeaderRight />
        </div>
      </header>
    </>
  );
};
