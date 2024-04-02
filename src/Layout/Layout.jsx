import { useState, useEffect } from "react";

import { useCard } from "../context/CardContext";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { Link } from "react-router-dom";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCard();
  
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">جمعه بازار</Link>
        <Link to="/checkout">
          <div>
            <TfiShoppingCartFull />
            {state.itemsCounter === 0 ? null : (
              <span>{state.itemsCounter}</span>
            )}
          </div>
        </Link>
      </header>
      {children}

      <footer className={styles.footer}>
        <p>Develop with Toxic Ghost😎</p>
      </footer>
    </>
  );
}


export default Layout;
