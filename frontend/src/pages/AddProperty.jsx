function AddProperty() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: "40px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#7c5cff",
            marginBottom: "25px",
          }}
        >
          Add New Property
        </h2>

        <input
          type="text"
          placeholder="Property Name"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Location"
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Rent Amount"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Owner Contact"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Image URL"
          style={inputStyle}
        />

        <textarea
          placeholder="Property Description"
          rows="5"
          style={{
            ...inputStyle,
            resize: "none",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#7c5cff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "15px",
          }}
        >
          Add Property
        </button>
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

export default AddProperty;
