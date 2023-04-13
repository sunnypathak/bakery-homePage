import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem
} from "../../../redux/cart/cart.action";
import styles from "./CartItem.module.scss";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { image, title, quantity, price } = item;
  return (
    <div className={styles.container}>
      <img src={image} alt="product" className={styles.productImage} />
      <div className={styles.name}>{title}</div>
      <div className={styles.quantity}>
        <div onClick={() => dispatch(removeItem(item))}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => dispatch(addItem(item))}>&#10095;</div>
      </div>
      <div className={styles.price}>Rs. {price}</div>
      <div
        className={styles.remove}
        onClick={() => dispatch(clearItemFromCart(item))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CartItem;
