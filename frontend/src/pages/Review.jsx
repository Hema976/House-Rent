import { useNavigate } from "react-router-dom";

function Review() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "12px",
          width: "350px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2>🎉 Payment Successful</h2>

        <p>Your property has been booked successfully.</p>

        <p>Thank you for choosing <b>RentEase</b>.</p>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            background: "#7c5cff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Review;
