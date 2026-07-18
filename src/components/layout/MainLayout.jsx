import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./navigation/components/Navbar";
import AuthModal from "../../features/auth/components/AuthModal";
import { useState } from "react";
import SearchModal from "../../features/search/components/SearchModal";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";

function MainLayout() {
  const openAuthModal = useSelector((state) => state.auth.authModalOpen);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
      <AuthModal isOpen={openAuthModal} />
    </>
  );
}

export default MainLayout;
