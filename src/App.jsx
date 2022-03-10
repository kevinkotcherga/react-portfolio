import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import { ProductList } from "./components/productList/ProductList";

const App = () => {
  return (
    <div>
      <Intro />
      <ProductList />
      <About />
    </div>
  )
};

export default App;
