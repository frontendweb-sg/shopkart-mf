import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./layout";

const UsersPage = lazy(() => import("./pages/users"));
const CategoriesPage = lazy(() => import("./pages/categories"));
const AuthPage = lazy(() => import("./pages/auth"));
const AdminPage = lazy(() => import("./pages/admin"));
const HomePage = lazy(() => import("./pages/home"));
const AboutPage = lazy(() => import("./pages/about"));
const CartPage = lazy(() => import("./pages/cart"));
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="auth/*" element={<AuthPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="users/*" element={<UsersPage />} />
        <Route path="categories/*" element={<CategoriesPage />} />
        <Route path="cart/*" element={<CartPage />} />
        <Route path="admin/*" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
