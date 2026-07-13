import { useEffect, useState } from "react";
import API from "../services/api";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await API.get("/api/properties");
      setProperties(res.data);
    } catch (err) {
      console.log(err);

      // Temporary data
      setProperties([
        {
          _id: 1,
          title: "2BHK House",
          location: "Hyderabad",
          price: 12000,
        },
        {
          _id: 2,
          title: "1BHK Apartment",
          location: "Bangalore",
          price: 9000,
        },
      ]);
    }
  };

  return (
    <div>
      <h2>Available Properties</h2>

      {properties.map((property) => (
        <div
          key={property._id}
          style={{
            border: "1px solid #ccc",
            margin: "15px",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{property.title}</h3>

          <p>📍 {property.location}</p>

          <p>💰 ₹{property.price}</p>

          <button>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
