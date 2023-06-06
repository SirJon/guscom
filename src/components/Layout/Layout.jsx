import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "./Header/Header";
import Root from "@/components/Root/Root";
import { USER_STATUS } from "@/constants";

const Layout = () => {
  const { pathname } = useLocation();
  const { roots } = useSelector(state => state.root);
  const { status } = useSelector(state => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/") {
      navigate(roots.length > 0 ? `/${roots[0].url}` : '');
    }
  }, [pathname]);
  useEffect(() => {
    if (status === USER_STATUS.status.logout) {
      navigate("/auth");
    }
  }, [status]);
  if (status === USER_STATUS.status.logout) return <></>
  return (
    <>
      <Header />
      <main className="main">
        <Root />
        <Outlet />
      </main>
    </>
  )
}

export default Layout