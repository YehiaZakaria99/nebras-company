import Navbar from "./../../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import ScrollToTop from "../../Components/Scroll/ScrollToTop";

export default function Layout() {
  return (
    <>
    <ScrollToTop />
    <div className="relative">
      <Navbar />
      <Outlet />
      {/* <ContactUs /> */}
    </div>
    </>
  );
}
