import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { AppContent } from "@/utils/contents";
const Header = () => {
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} component={Link} to="/">
            {AppContent.brandName}
          </Typography>

          <Box>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/admin">Admin</NavLink>
            <NavLink to="/categories">Products</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/auth">Login</NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
