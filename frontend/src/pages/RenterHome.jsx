import { Link } from "react-router-dom";

function RenterHome() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#7c5cff" }}>
        Renter Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Link to="/properties">
          <button style={btn}>Browse Properties</button>
        </Link>

        <Link to="/booking">
          <button style={btn}>My Bookings</button>
        </Link>

        <Link to="/profile">
          <button style={btn}>Profile</button>
        </Link>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          marginTop: "40px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h2>Welcome Renter 👋</h2>
        <p>Browse rental properties and manage your bookings.</p>
      </div>
    </div>
  );
}

const btn = {
  padding: "10px 20px",
  background: "#7c5cff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default RenterHome;
