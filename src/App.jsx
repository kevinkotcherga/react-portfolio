import CustomCursorManager from "./components/CustomCursor/context/manager";
import './scss/style.scss'
import './fonts/Nagoda/Nagoda.ttf';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <CustomCursorManager>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </CustomCursorManager>
    </div>
  )
};

export default App;
