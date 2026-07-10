import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./navigation/components/Navbar";
import AuthModal from "../../features/auth/components/AuthModal";
import { useState } from "react";
import SearchModal from "../../features/search/components/SearchModal";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";

function MainLayout() {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Navbar showAuthModal={setOpenAuthModal} />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
      <AuthModal isOpen={openAuthModal} onShow={setOpenAuthModal} />
    </>
  );
}

export default MainLayout;
