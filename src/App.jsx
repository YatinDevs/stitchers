import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import PageNotFound from "./pages/ErrorPages/NotFound";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { CartProvider } from "./context/CartContext";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import AboutPage from "./pages/AboutUsPage/AboutUsPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import FacilitiesPage from "./pages/Facilities/FacilitiesPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="facilities" element={<FacilitiesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="training" element={<TrainingPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
