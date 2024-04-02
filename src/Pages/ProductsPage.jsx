import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Crad from "../components/Crad";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import { useProducts } from "../context/ProductContext";
import styles from "../Pages/ProductsPage.module.css";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import SideBar from "../components/SideBar";

const ProductsPage = () => {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed?.map((product) => (
            <Crad key={product.id} data={product} />
          ))}
        </div>
        <SideBar setQuery={setQuery} query={query} />
      </div>
    </>
  );
};

export default ProductsPage;
