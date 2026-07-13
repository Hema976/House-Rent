import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();

  const [name, setName] = useState("Hema");
  const [email, setEmail] = useState("hema@gmail.com");

  const handleSave = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    alert("Profile Updated Successfully");
    navigate("/profile");
  };

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
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#7c5cff" }}>
          Edit Profile
        </h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <button
          onClick={handleSave}
          style={{
            width: "100%",
            padding: "12px",
            background: "#7c5cff",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
