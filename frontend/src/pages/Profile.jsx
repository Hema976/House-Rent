
function Profile() {
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

        <p><b>Name:</b> Hema</p>
        <p><b>Email:</b> hema@gmail.com</p>
        <p><b>Role:</b> Owner</p>

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#7c5cff",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
