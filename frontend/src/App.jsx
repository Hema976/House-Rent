import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PropertyList from "./pages/PropertyList";
import PropertyDetails from "./pages/PropertyDetails";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import AddProperty from "./pages/AddProperty";
import Payment from "./pages/Payment";
import Review from "./pages/Review";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/review" element={<Review />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
