import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import { ProductList } from "./components/productList/ProductList";
import { ProductListRails } from "./components/productListRails/ProductListRails";
import CustomCursor from "./components/CustomCursor";
import CustomCursorManager from "./components/CustomCursor/context/manager";
import './scss/style.scss'

const App = () => {
  return (
      <CustomCursorManager>
    <div>
      <CustomCursor />
      <Intro />
      <ProductList />
      <ProductListRails />
      <About />
      <Contact />
    </div>
      </CustomCursorManager>
  )
};

export default App;
