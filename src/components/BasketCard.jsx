import React from "react";
import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";


import styles from "./BasketeCard.module.css";
const BasketCard = ({ data, clickHandelr }) => {
  const { image, title, quantity } = data;

  return (
    <>
      <div className={styles.card}>
        <img src={image} alt={title} />
        <p>{shortenText(title)}</p>
        <div className={styles.action}>
          {quantity === 1 && (
            <button onClick={() => clickHandelr("REMOVE_ITEM", data)}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandelr("DECREASE", data)}>-</button>
          )}
          <span>{quantity}</span>

          <button onClick={() => clickHandelr("INCREASE", data)}>+</button>
        </div>
      </div>
    </>
  );
};

export default BasketCard;
