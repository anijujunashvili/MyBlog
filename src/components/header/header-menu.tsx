import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderMenu = () => {
  const { t } = useTranslation();
  const MenuStyle = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    const ActiveMenu = "text-gray-700";
    const InActiveMenu = "text-gray-600 hover:text-gray-800";
    return isActive ? ActiveMenu : InActiveMenu;
  };
  return (
    <ul className="bg-test flex">
      <li className="mr-6">
        <NavLink className={MenuStyle} to="home">
          {t("header.home")}
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink className={MenuStyle} to="/">
          {t("header.write")}
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink className={MenuStyle} to="/">
          {t("header.about")}
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderMenu;
