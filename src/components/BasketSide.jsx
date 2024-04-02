import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheckFill } from "react-icons/bs";
import styles from "./BasketSide.module.css";
const BasketSide = ({ state, clickHandelr }) => {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total}$</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheckFill />
        <p>Status:</p>
        <span>{!state.checkout && "Pending"}</span>
      </div>
      <button onClick={() => clickHandelr("CHECKOUT")}>Checkout</button>
    </div>
  );
};

export default BasketSide;
