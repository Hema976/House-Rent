   import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProperty() {
  const navigate = useNavigate();

  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    owner: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    const oldData =
      JSON.parse(localStorage.getItem("properties")) || [];

    const newProperty = {
      _id: Date.now(),
      ...property,
    };

    localStorage.setItem(
      "properties",
      JSON.stringify([...oldData, newProperty])
    );

    alert("Property Added Successfully");
    navigate("/properties");
  };

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
        }}
      >
        <h2 style={{ textAlign: "center", color: "#7c5cff" }}>
          Add New Property
        </h2>

        <input
          name="title"
          placeholder="Property Name"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Rent Amount"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="owner"
          placeholder="Owner Contact"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          style={inputStyle}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="5"
          style={inputStyle}
          onChange={handleChange}
        />

        <button
          onClick={handleAdd}
          style={{
            width: "100%",
            padding: "12px",
            background: "#7c5cff",
            color: "white",
            border: "none",
            borderRadius: "8px",
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
};

export default AddProperty;     
