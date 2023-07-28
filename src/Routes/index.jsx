import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductListPage from "../Pages/ProductListPage";
import ProductPage from "../Pages/ProductPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/products"
          element={<ProductListPage />}
        />
        <Route
          exact
          path="/products/:categoryId"
          element={<ProductListPage />}
        />
        <Route
          exact
          path="/product-details/:productId"
          element={<ProductPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
