import Header from "./Header/Header";
import Root from "@/components/Root/Root";
import { Outlet } from "react-router-dom";

const Layout = () => {
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