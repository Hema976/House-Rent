function About() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "12px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#7c5cff",
            marginBottom: "20px",
          }}
        >
          About RentEase
        </h1>

        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          RentEase is a modern House Rental Management System developed
          using React.js. It helps users search rental properties,
          book houses, make secure payments, and manage bookings.
        </p>

        <br />

        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          Owners can add and manage properties, while Admins can monitor
          properties and bookings. Renters can browse houses, book
          properties, and manage their profile.
        </p>
      </div>
    </div>
  );
}

export default About;
