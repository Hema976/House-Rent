import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "#1e293b",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,0,0,0.4)",
        }}
      >
        <h2>Booking Confirmation</h2>

        <p><b>Property:</b> 2BHK House</p>
        <p><b>Location:</b> Hyderabad</p>
        <p><b>Rent:</b> ₹12,000 / Month</p>

        <button
          onClick={() => navigate("/payment")}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#7c5cff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Booking;
