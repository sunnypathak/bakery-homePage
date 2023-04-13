//libs
import React from "react";
import { useSelector, connect, useDispatch } from "react-redux";

//style
import styles from "./Header.module.scss";

//selector
import {
  selectCartHidden,
  selectCartItemsCount
} from "../../redux/cart/cart.selectors";

//action
import { toggleCartHidden } from "../../redux/cart/cart.action";

import Cart from "../Cart/Cart";

const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartItemsCount);
  const hidden = useSelector(selectCartHidden);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Bake Shop</div>
      <div
        className={styles.cart}
        onClick={() => dispatch(toggleCartHidden())}
      >{`Cart(${cartCount})`}</div>
      {hidden ? null : <Cart />}
    </div>
  );
};

export default Header;
