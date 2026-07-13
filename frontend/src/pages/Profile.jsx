
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name") || "Hema";
  const email = localStorage.getItem("email") || "hema@gmail.com";

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
          color: "white",
          padding: "30px",
          borderRadius: "12px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#7c5cff" }}>My Profile</h2>

        <p><b>Name:</b> {name}</p>

        <p><b>Email:</b> {email}</p>

        <p><b>Role:</b> Owner</p>

        <button
          onClick={() => navigate("/edit-profile")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#7c5cff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
