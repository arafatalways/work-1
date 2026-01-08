import Footer from "@/components/modules/footer";
import Header from "@/components/modules/header";
import { Outlet } from "react-router";

export default function FrontLayout() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
