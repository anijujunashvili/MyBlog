import { Link } from "react-router-dom";
import { LoginBtn } from "./header.styles.ts";
import { useTranslation } from "react-i18next";
import { userAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { logout } from "@/supabase/auth";
import { getUserInfo } from "@/supabase/profile";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
type stateType = {
  name: string;
  avatar: string;
};
const AuthBtn = () => {
  const { t } = useTranslation();

  const user = useAtomValue(userAtom);
  const [userInfo, setUserInfo] = useState<stateType>({ name: "", avatar: "" });

  const userId = user?.user?.id as string;

  useEffect(() => {
    if (userId) {
      getUserInfo(userId).then((res) => {
        const data = res?.data[0];

        setUserInfo({
          name: data?.full_name_ka as string,
          avatar: data?.avatar_url as string,
        });
      });
    }
  }, [user, userId]);

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={userInfo.avatar} alt="user image" />

              <AvatarFallback>{userInfo.name[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24 items-end">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link to="profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span onClick={logout}>LogOut</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="/login">
          <button className={LoginBtn()}>{t("header.sign-in")}</button>
        </Link>
      )}
    </>
  );
};

export default AuthBtn;
