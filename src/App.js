import MenuList from "./components/components";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import Product3 from "./pages/Product3";
import Product4 from "./pages/Product4";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Join from "./pages/Join";
import "./components/Category.css";

const App = () => {
  const [visible, setVisible] = useState(false);
  const Enter = () => {
    setVisible(!visible);
  };

  const Leave = () => {
    setVisible(!visible);
  };

  return (
    <div className="body">
      <div className="nav">
        <Home />
      </div>
      {!visible ? (
        <div onMouseEnter={Enter}>
          <div>
            <BsList id="menuBtn" />
          </div>
        </div>
      ) : (
        <div onMouseLeave={Leave}>
          <div id="wrapper">
            <BsList id="menuBtn" />
            <MenuList />
          </div>
        </div>
      )}
      <Routes>
        <Route path="/1" element={<Product1 />} />
        <Route path="/2" element={<Product2 />} />
        <Route path="/3" element={<Product3 />} />
        <Route path="/4" element={<Product4 />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/Join" element={<Join />} />
      </Routes>
    </div>
  );
};

export default App;
