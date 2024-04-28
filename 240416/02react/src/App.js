import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/product/:device/:category/:productnum"
          element={<ProductDetail />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
