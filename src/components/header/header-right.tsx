import { Link } from "react-router-dom";
import { LoginBtn } from "./header.styles.ts";
import ChangeLangs from "./change-langs.tsx";
import ChangeTheme from "./change-theme.tsx";
import SearchComp from "./search.tsx";
import { useTranslation } from "react-i18next";

const HeaderRight = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <SearchComp />
        </div>

        <Link to="/login">
          <button className={LoginBtn()}>{t("header.sign-in")}</button>
        </Link>
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
