import Header from "./Header/Header";
import Root from "@/pages/Root/Root";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Root />
        <Outlet />
      </main>
    </>
  )
}

export default Layout