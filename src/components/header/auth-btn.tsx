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
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const AuthBtn = () => {
  const { t } = useTranslation();
  const user = useAtomValue(userAtom);
  // const [userInfo, setUserInfo] = useState({ name: "", avatar: "" });

  const userId = user?.user?.id as string;

  const { data } = useQuery({
    queryKey: ["getUser", userId],
    queryFn: () => getUserInfo(userId),
    enabled: !!userId,
    select: (data) => data?.data?.[0],
  });

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={String(data?.avatar_url)} alt="user image" />

              <AvatarFallback>{data?.full_name_ka}</AvatarFallback>
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
