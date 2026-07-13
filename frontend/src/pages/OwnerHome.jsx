import { Link } from "react-router-dom";

function OwnerHome() {
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
        Owner Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Link to="/add-property">
          <button style={btn}>Add Property</button>
        </Link>

        <Link to="/owner/properties">
          <button style={btn}>All Properties</button>
        </Link>

        <Link to="/owner/bookings">
          <button style={btn}>All Bookings</button>
        </Link>
      </div>

      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          background: "#1e293b",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#7c5cff" }}>
          Welcome Owner 👋
        </h2>

        <p style={{ textAlign: "center" }}>
          Manage your rental properties easily using RentEase.
        </p>
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

export default OwnerHome;
