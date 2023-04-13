import "./styles.css";

//components
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ProductList from "./components/ProductList/ProductList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductList />
    </div>
  );
}
