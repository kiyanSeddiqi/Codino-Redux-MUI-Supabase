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
import useAuthListener from "../../features/auth/hooks/useAuthListener";

function BaseLayout({ withContainer = true }) {
  const openAuthModal = useSelector((state) => state.auth.authModalOpen);
  useRestoreSession();
  useAuthListener();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        {withContainer ? (
          <Container>
            <Outlet />
          </Container>
        ) : (
          <Outlet />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
      <AuthModal isOpen={openAuthModal} />
      <AppSnackbar />
    </>
  );
}

export default BaseLayout;
