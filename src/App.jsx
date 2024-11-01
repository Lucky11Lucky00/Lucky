import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import "./App.css";
import { useSelector } from "react-redux";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  // Use useSelector to access the cart items from the Redux store
  const totalItems = useSelector((state) => 
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <>
    <GoogleOAuthProvider clientId="172384830468-amlg2n0bdngo44c8pm5203q0jk1u64ub.apps.googleusercontent.com">
      <GoogleLoginComponent />
      </GoogleOAuthProvider>
      <BrowserRouter>
        <>
          <Link to="/home">🏠 Home</Link>
          <Link to="/veg">🥦 Veg</Link>
          <Link to="/nonveg">🍗 NonVeg</Link>
          <Link to="/cart">🛒 ({totalItems})</Link>
          <Link to="/purchasehistory">📜 Purchase History</Link>
          <Link to="/aboutus">👤 About Us</Link>
          <Link to="/contactus">📞 Contact Us</Link>
        </>
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchasehistory" element={<PurchaseHistory />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      </>
    
  );
}

export default App;
