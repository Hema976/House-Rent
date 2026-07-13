import { useNavigate } from "react-router-dom";

function Payment() {
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
        <h2>Payment</h2>

        <p>Amount: <b>₹12,000</b></p>

        <input
          type="text"
          placeholder="Card Number"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "6px",
          }}
        />

        <input
          type="text"
          placeholder="Card Holder Name"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "6px",
          }}
        />

        <button
          onClick={() => navigate("/review")}
          style={{
            width: "100%",
            padding: "12px",
            background: "#7c5cff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;
