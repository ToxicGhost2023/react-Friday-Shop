import React from "react";
import { useCard } from "../context/CardContext";
import BasketCard from "../components/BasketCard";
import images from "../photos/images.png";
import Basket from "../photos/basekt.png";
import BasketSide from "../components/BasketSide";
import styles from "./CheckoutPage.module.css";
const CheckoutPage = () => {
  const [state, dispatch] = useCard();

  const clickHandelr = (type, payload) => {
    dispatch({ type, payload });
  };
  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p style={{ fontSize: 50 }}>Empty😢</p>
        <img src={Basket} alt={Basket} style={{ marginLeft: 200 }} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSide state={state} clickHandelr={clickHandelr} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandelr={clickHandelr}
          />
        ))}
      </div>
      <img src={images} alt={images} style={{ marginLeft: 30 }} />
    </div>
  );
};

export default CheckoutPage;
