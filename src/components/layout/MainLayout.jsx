import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer";
import AuthModal from "../../features/auth/components/AuthModal";
import { useState } from "react";

function MainLayout() {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <>
      <header>
        <Navbar showAuthModal={setOpenAuthModal} />
      </header>
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
