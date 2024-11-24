import { Outlet, Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const [user] = useAtom(userAtom);

  if (user) {
    return <Navigate to="/home" />;
  }

  return children || <Outlet />;
};

export default AuthGuard;
