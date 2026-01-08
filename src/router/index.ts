import FrontLayout from "@/components/layout/FrontLayout";
import HeroPage from "@/pages/HeroPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: FrontLayout,
    children: [
      {
        path: "/",
        Component: HeroPage,
      },
    ],
  },
]);
