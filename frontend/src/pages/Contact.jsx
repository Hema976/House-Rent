function Contact() {
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
          maxWidth: "700px",
          margin: "auto",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#7c5cff",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={inputStyle}
        />

        <textarea
          placeholder="Your Message"
          rows="6"
          style={{
            ...inputStyle,
            resize: "none",
          }}
        />

        <button
          onClick={() => alert("Message Sent Successfully!")}
          style={{
            width: "100%",
            padding: "12px",
            background: "#7c5cff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          Send Message
        </button>

        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <p>📧 Email: support@rentease.com</p>
          <p>📞 Phone: +91 9876543210</p>
          <p>📍 Address: Hyderabad, Telangana, India</p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #444",
  outline: "none",
  fontSize: "15px",
};

export default Contact;
