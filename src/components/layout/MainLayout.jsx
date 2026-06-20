import { Outlet } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer";
import { Container } from "@mui/material";

function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
