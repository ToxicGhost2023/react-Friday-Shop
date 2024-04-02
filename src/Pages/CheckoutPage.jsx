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
        <p style={{ fontSize: 30,fontWeight:700 }}>Empty😢</p>
        <img className={styles.img} src={Basket} alt={Basket} style={{ marginRight:100,width:350 }} />
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
      <img className={styles.image} src={images} alt={images} style={{ marginLeft: 10, width: 100 }} />
    </div>
  );
};

export default CheckoutPage;
