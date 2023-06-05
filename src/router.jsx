import { createBrowserRouter } from "react-router-dom";
import Auth from "@/pages/Auth/Auth";
import AuthError from "@/pages/Auth/Error/Error";
import Layout from "@/components/Layout/Layout";
import Offers from "@/pages/Offers/Offers";
import Education from "@/pages/Education/Education";
import Moderators from "@/pages/Moderators/Moderators";
import Notification from "@/pages/Notification/Notification";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "offers",
        element: <Offers/>,
      },
      {
        path: "education",
        element: <Education/>,
      },
      {
        path: "moderators",
        element: <Moderators/>,
      },
      {
        path: "notification",
        element: <Notification/>,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/auth/error",
    element: <AuthError />,
  },
]);