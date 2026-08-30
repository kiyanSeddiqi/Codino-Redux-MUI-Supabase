import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./navigation/components/Navbar";
import AuthModal from "../../features/auth/components/AuthModal";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";
import { useRestoreSession } from "../../features/auth/hooks/useRestoreSession";
import useAuthListener from "../../features/auth/hooks/useAuthListener";

function BaseLayout({ withContainer = true, showFooter = true }) {
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
      {showFooter && (
        <footer>
          <Footer />
        </footer>
      )}

      <AuthModal isOpen={openAuthModal} />
    </>
  );
}

export default BaseLayout;
