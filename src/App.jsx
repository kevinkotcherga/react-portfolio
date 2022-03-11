import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import { ProductList } from "./components/productList/ProductList";
import { ProductListRails } from "./components/productListRails/ProductListRails";

const App = () => {
  return (
    <div>
      <Intro />
      <ProductList />
      <ProductListRails />
      <About />
      <Contact />
    </div>
  )
};

export default App;
