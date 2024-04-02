import { Link } from "react-router-dom";
import { TbShoppingBagPlus } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@mui/material";

import styles from "../components/Card.module.css";

import { productQuantity, shortenText } from "../helper/helper";
import { useCard } from "../context/CardContext";

function Crad({ data }) {
  

  const { id, image, title, price } = data;

  const [state, dispatch] = useCard();

  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <>
      <div className={styles.card}>
        <img src={image} alt={title} width="150px" />
        <h3>{shortenText(title)}</h3>
        <p>{price}$</p>
        <div className={styles.actions}>
          <Link to={`/products/${id}`}>
            <TbListDetails />
          </Link>
          <div>
            {quantity === 1 && (
              <Button
                variant="contained"
                onClick={() => clickHandler("REMOVE_ITEM")}
                style={{ width: 30, fontSize: 20, borderRadius: 12 }}
              >
                <MdDeleteOutline />
              </Button>
            )}

            {quantity > 1 && (
              <Button
                variant="outline"
                onClick={() => clickHandler("DECREASE")}
                style={{
                  width: 10,
                  fontSize: 25,
                  height: 30,
                  backgroundColor: "#2962ff",
                  color: "#fff",
                  borderRadius: 12,
                }}
              >
                -
              </Button>
            )}
            <span>{quantity === 0 ? null : quantity}</span>
            {quantity === 0 ? (
              <Button
                variant="contained"
                onClick={() => clickHandler("ADD_ITEM")}
                style={{ width: 80, fontSize: 20, borderRadius: 12 }}
              >
                <TbShoppingBagPlus />
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={() => clickHandler("INCREASE")}
                style={{
                  width: 10,
                  fontSize: 25,
                  height: 30,
                  backgroundColor: "#2962ff",
                  color: "#fff",
                  borderRadius: 12,
                }}
              >
                +
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Crad;
