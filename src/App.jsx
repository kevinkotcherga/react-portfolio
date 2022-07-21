import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";
import { ProductList } from "./components/productList/ProductList";
// import { ProductListRails } from "./components/productListRails/ProductListRails";
import CustomCursor from "./components/CustomCursor/index";
import CustomCursorManager from "./components/CustomCursor/context/manager";
import './scss/style.scss'
import WorkInProgress from "./components/workInProgress/WorkInProgress";

const App = () => {
  return (
    <div>
      <CustomCursorManager>
      <CustomCursor />
      <Intro />
      <ProductList />
      {/* <ProductListRails /> */}
      <WorkInProgress />
      <About />
      <Contact />
      <Footer />
      </CustomCursorManager>
    </div>
  )
};

export default App;
