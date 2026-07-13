import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PropertyList from "./pages/PropertyList";
import PropertyDetails from "./pages/PropertyDetails";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import AddProperty from "./pages/AddProperty";
import Payment from "./pages/Payment";
import Review from "./pages/Review";

import OwnerHome from "./pages/OwnerHome";
import OwnerProperties from "./pages/OwnerProperties";
import OwnerBookings from "./pages/OwnerBookings";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Property */}
      <Route path="/properties" element={<PropertyList />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/review" element={<Review />} />

      {/* Profile */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />

      {/* Owner */}
      <Route path="/owner" element={<OwnerHome />} />
      <Route path="/add-property" element={<AddProperty />} />
      <Route path="/owner/properties" element={<OwnerProperties />} />
      <Route path="/owner/bookings" element={<OwnerBookings />} />
    </Routes>
  );
}

export default App;
