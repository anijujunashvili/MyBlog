import ChangeLangs from "./change-langs.tsx";
import ChangeTheme from "./change-theme.tsx";
import SearchComp from "./search.tsx";
import AuthBtn from "./auth-btn.tsx";

const HeaderRight = () => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <SearchComp />
        </div>
        <AuthBtn />
        <div className="relative">
          <ChangeLangs />
        </div>
        <div className="relative">
          <ChangeTheme />
        </div>
      </div>
    </>
  );
};
export default HeaderRight;
