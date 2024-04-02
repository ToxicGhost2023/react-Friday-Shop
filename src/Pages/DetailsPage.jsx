import { Link, useParams } from "react-router-dom";
import { useProductsDetails } from "../context/ProductContext";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

import Loader from "../components/Loader";

import styles from "./DetailsPage.module.css";
import { useState } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const productsDetails = useProductsDetails(+id);

  const [like, setLike] = useState(0);
  const likeHandler = () => {
    setLike((like) => like + 1);
  };

  if (!productsDetails) return <Loader />;

  return (
    <div className={styles.cantainer}>
      <img src={productsDetails.image} alt={productsDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productsDetails.title}</h3>

        <p className={styles.description}>{productsDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject /> {productsDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag /> {productsDetails.price}$
          </span>
          <Link to="/products" className={styles.link}>
            <IoArrowBackCircleOutline />
            <span className={styles.span}> Back to shop😘</span>
          </Link>
        </div>
        <button className={styles.heart} onClick={likeHandler}>
          <FaHeart />
          {like === 0 ? null : <span>{like}</span>}
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
