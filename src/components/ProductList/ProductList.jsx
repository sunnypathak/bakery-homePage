import React from "react";
//component
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

//style
import styles from "./ProductList.module.scss";

//mock
import { bakeryData } from "../../mocks/bakery";

const ProductList = () => {
  const renderProductList = () => {
    return bakeryData.map((data) => {
      return (
        <div className={styles.listItem} key={data.id}>
          <ProductCard data={data} />
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.listContainer}>{renderProductList()}</div>
    </div>
  );
};

export default ProductList;
