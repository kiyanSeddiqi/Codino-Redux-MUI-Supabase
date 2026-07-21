import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./navigation/components/Navbar";
import AuthModal from "../../features/auth/components/AuthModal";
import { useState } from "react";
import SearchModal from "../../features/search/components/SearchModal";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";
import AppSnackbar from "../ui/AppSnackbar/AppSnackbar";
import { useRestoreSession } from "../../features/auth/hooks/useRestoreSession";

function MainLayout() {
  const openAuthModal = useSelector((state) => state.auth.authModalOpen);
  useRestoreSession();
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
      <AppSnackbar />
    </>
  );
}

export default MainLayout;
