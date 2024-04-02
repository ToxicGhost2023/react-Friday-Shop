import { Navigate, Route, Routes } from "react-router-dom";

import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";
import PageNotFound from "./Pages/404";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductsProvider from "./context/ProductContext";
import CardProvider from "./context/CardContext";
import Layout from "./Layout/Layout";




function App() {

  return (
    <>
      <CardProvider>
        <ProductsProvider>
          <Layout>
            <Routes>
              <Route index element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </CardProvider>
    </>
  );
}

export default App;
