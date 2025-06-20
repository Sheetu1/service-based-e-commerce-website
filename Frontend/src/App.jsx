import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"; 
import Success from "./pages/Success";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (service) => {
    setCartItems([...cartItems, service]);
  };

  return (
    <Router>
      <div className="p-4">
        <nav className="flex gap-4 mb-6 text-blue-600 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cartItems.length})</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} /> 
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
