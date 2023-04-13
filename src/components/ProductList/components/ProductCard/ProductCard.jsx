import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../redux/cart/cart.action";

//style
import styles from "./ProductCard.module.scss";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const { title, image, price } = data;
  return (
    <div className={styles.container}>
      <img src={image} alt="product" />
      <h3>{title}</h3>
      <p className={styles.price}>Rs. {price}</p>
      <button
        className={styles.cartBtn}
        onClick={() => dispatch(addItem(data))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
