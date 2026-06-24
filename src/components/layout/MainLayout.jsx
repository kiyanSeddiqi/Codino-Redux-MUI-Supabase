import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./navigation/components/Navbar";
import Footer from "./Footer";
import AuthModal from "../../features/auth/components/AuthModal";
import { useState } from "react";
import SearchModal from "../../features/search/components/SearchModal";

function MainLayout() {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <>
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
