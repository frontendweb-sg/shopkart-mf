import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";
const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container component="main">
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
