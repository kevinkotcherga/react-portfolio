import CustomCursorManager from "./components/CustomCursor/context/manager";
import './scss/style.scss'
import './fonts/Nagoda/Nagoda.ttf';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

const App = () => {
  return (
    <div>
      <CustomCursorManager>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project/:id" element={<Project/>} />
        </Routes>
      </CustomCursorManager>
    </div>
  )
};

export default App;
