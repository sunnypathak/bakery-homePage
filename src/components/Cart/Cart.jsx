import React from "react";
import { useSelector } from "react-redux";

import styles from "./Cart.module.scss";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import CartItem from "./component/CartItem";

const Cart = () => {
  const cartData = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleCheckout = () => {
    const payload = {
      cartData,
      cartTotal
    };
    console.log(payload);
  };

  return (
    <div className={styles.container}>
      {cartData.length > 0 ? (
        <>
          {cartData.map((item) => {
            return (
              <>
                <div className={styles.cartItem} key={item.id}>
                  <CartItem item={item} />
                </div>
              </>
            );
          })}
          <div className={styles.total}>Total : Rs. {cartTotal}</div>
          <div className={styles.checkoutBtn} onClick={handleCheckout}>
            Checkout
          </div>
        </>
      ) : (
        <div className={styles.emptyDiv}>
          <h1>Your Cart is Lonely</h1>
          <h3>Please add items to your Cart</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
