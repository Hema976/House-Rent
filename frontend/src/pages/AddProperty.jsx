import { useState } from "react";
import API from "../services/api";

function AddProperty() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [rent, setRent] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await API.post("/properties", {
        title,
        address,
        rent,
        description,
      });

      alert(res.data.message);

      setTitle("");
      setAddress("");
      setRent("");
      setDescription("");
    } catch (err) {
      alert("Error adding property");
    }
  };

  return (
    <div>
      <h2>Add Property</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Rent"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
      /><br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /><br /><br />

      <button onClick={handleSubmit}>Add Property</button>
    </div>
  );
}

export default AddProperty;
