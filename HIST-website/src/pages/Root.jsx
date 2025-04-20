import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ContactSection from "../components/ContactSection";

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ContactSection />
    </>
  );
}
